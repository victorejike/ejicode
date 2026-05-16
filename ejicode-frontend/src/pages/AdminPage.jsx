import { useEffect, useMemo, useState } from 'react'
import { adminLogin, clearAdminToken, getContacts, setAdminToken } from '../lib/api'

function AdminPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isAuthed, setIsAuthed] = useState(() => Boolean(localStorage.getItem('ejicode_admin_token')))

  const stats = useMemo(() => {
    const bookings = contacts.filter(item => item.source === 'booking').length
    const unread = contacts.filter(item => item.status === 'new').length
    return { total: contacts.length, bookings, unread }
  }, [contacts])

  const loadContacts = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await getContacts()
      setContacts(res.data || [])
      setIsAuthed(true)
    } catch (err) {
      clearAdminToken()
      setIsAuthed(false)
      setError(err.message || 'Could not load dashboard data.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isAuthed) loadContacts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await adminLogin(credentials)
      if (res.data?.user?.role !== 'admin') {
        throw new Error('This account is not an admin.')
      }
      setAdminToken(res.data.accessToken)
      setIsAuthed(true)
      await loadContacts()
    } catch (err) {
      clearAdminToken()
      setIsAuthed(false)
      setError(err.message || 'Login failed.')
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    clearAdminToken()
    setContacts([])
    setIsAuthed(false)
  }

  if (!isAuthed) {
    return (
      <main className="admin-wrap">
        <section className="admin-login">
          <span className="section-label">Admin</span>
          <h1>Dashboard access</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email address</label>
              <input className="field" type="email" value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="field" type="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} required />
            </div>
            {error && <p className="form-error">{error}</p>}
            <button className="btn-primary admin-login-btn" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </section>
      </main>
    )
  }

  return (
    <main className="admin-wrap">
      <section className="admin-shell">
        <div className="admin-header">
          <div>
            <span className="section-label">Admin</span>
            <h1>Bookings dashboard</h1>
          </div>
          <div className="admin-header-actions">
            <button className="btn-outline" onClick={loadContacts} disabled={loading}>Refresh</button>
            <button className="btn-primary" onClick={logout}>Sign out</button>
          </div>
        </div>

        <div className="admin-stats">
          <div><span>{stats.total}</span><p>Total enquiries</p></div>
          <div><span>{stats.bookings}</span><p>Bookings</p></div>
          <div><span>{stats.unread}</span><p>New</p></div>
        </div>

        {error && <p className="form-error">{error}</p>}
        {loading && <p className="admin-muted">Loading dashboard data...</p>}

        <div className="admin-list">
          {contacts.map((item) => (
            <article className="admin-record" key={item._id}>
              <div className="admin-record-main">
                <div>
                  <span className={`admin-badge ${item.source === 'booking' ? 'booking' : ''}`}>{item.source || 'contact'}</span>
                  <h2>{item.name}</h2>
                  <p>{item.email}{item.company ? `, ${item.company}` : ''}</p>
                </div>
                <span className="admin-status">{item.status}</span>
              </div>

              <div className="admin-detail-grid">
                <div><span>Project type</span><p>{item.projectType || 'Not provided'}</p></div>
                <div><span>Budget</span><p>{item.budget || 'Not provided'}</p></div>
                <div><span>Timeline</span><p>{item.timeline || 'Not provided'}</p></div>
                <div><span>Appointment</span><p>{formatAppointment(item)}</p></div>
              </div>

              <div className="admin-message">
                <span>Message</span>
                <p>{item.message}</p>
              </div>
            </article>
          ))}
          {!loading && contacts.length === 0 && <p className="admin-muted">No bookings or enquiries yet.</p>}
        </div>
      </section>
    </main>
  )
}

function formatAppointment(item) {
  if (!item.appointmentDate) return 'Not scheduled'
  const date = new Date(item.appointmentDate)
  return `${date.toLocaleDateString()}${item.appointmentTime ? ` at ${item.appointmentTime}` : ''}`
}

export default AdminPage
