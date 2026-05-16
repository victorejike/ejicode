import { useState } from 'react'
import { submitBooking } from '../lib/api'

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const TIME_SLOTS = ['09:00','10:00','11:00','14:00','15:00','16:00','17:00','18:00']

function LetsTalkPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name:'', email:'', company:'', type:'', budget:'', desc:'', timeline:'' })
  const [analyzing, setAnalyzing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [logDone, setLogDone] = useState(0)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [calMonth, setCalMonth] = useState(new Date().getMonth())
  const [calYear, setCalYear] = useState(new Date().getFullYear())
  const [confirmed, setConfirmed] = useState(false)
  const [bookingError, setBookingError] = useState('')
  const [submittingBooking, setSubmittingBooking] = useState(false)

  const resetCalendar = () => {
    const now = new Date()
    setCalMonth(now.getMonth())
    setCalYear(now.getFullYear())
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const goToStep = (s) => {
    setStep(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const selectOption = (group, value) => {
    setForm({ ...form, [group]: value })
  }

  const step1Valid = form.name.trim() && form.email.trim()
  const step2Valid = !!form.type
  const step3Valid = form.desc.trim().length >= 20

  const startAnalysis = () => {
    setAnalyzing(true)
    setProgress(0)
    setLogDone(0)
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 9 + 3
        if (next >= 100) {
          clearInterval(interval)
          setLogDone(5)
          setTimeout(() => {
            setAnalyzing(false)
            setStep(4)
            resetCalendar()
          }, 600)
          return 100
        }
        setLogDone(Math.floor((next / 100) * logLines.length))
        return next
      })
    }, 100)
  }

  const isDayAvailable = (d) => {
    const day = new Date(calYear, calMonth, d).getDay()
    if (day === 0 || day === 6) return false
    const now = new Date()
    if (calYear < now.getFullYear()) return false
    if (calYear === now.getFullYear() && calMonth < now.getMonth()) return false
    if (calYear === now.getFullYear() && calMonth === now.getMonth() && d <= now.getDate()) return false
    return true
  }

  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate()
  const firstDay = new Date(calYear, calMonth, 1).getDay()

  const changeMonth = (delta) => {
    let newMonth = calMonth + delta
    let newYear = calYear
    if (newMonth < 0) { newMonth = 11; newYear-- }
    if (newMonth > 11) { newMonth = 0; newYear++ }
    setCalMonth(newMonth)
    setCalYear(newYear)
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const confirmBooking = async () => {
    if (!selectedDate || !selectedTime || submittingBooking) return

    setSubmittingBooking(true)
    setBookingError('')

    const appointmentDate = new Date(calYear, calMonth, selectedDate, 12)
    const payload = {
      name: form.name,
      email: form.email,
      company: form.company,
      subject: `Project consultation - ${form.type}`,
      message: form.desc,
      projectType: form.type,
      budget: form.budget,
      timeline: form.timeline,
      appointmentDate: appointmentDate.toISOString(),
      appointmentTime: selectedTime,
      source: 'booking',
    }

    try {
      await submitBooking(payload)
      setConfirmed(true)
      setStep(5)
    } catch (error) {
      setBookingError(error.message || 'Could not save your booking. Please try again.')
    } finally {
      setSubmittingBooking(false)
    }
  }

  const logLines = [
    'Parsing project requirements...',
    'Assessing technical complexity...',
    'Mapping ideal tech stack...',
    'Evaluating team availability...',
    'Brief ready - opening scheduler.'
  ]

  return (
    <section className="consultation-wrap">
      <div className="consultation-inner">
        <div className="reveal">
          <span className="section-label">Get in touch</span>
          <h1 className="page-title">
            Tell us about<br /><em>your project</em>
          </h1>
          <p className="page-intro">
            Walk us through your vision. The more detail you share, the better we can prepare.
          </p>
        </div>

        {step <= 4 && (
          <div className="step-indicator">
            {[1,2,3].map(s => {
              let cls = 'step-dot '
              if (s < step) cls += 'done'
              else if (s === step) cls += 'current'
              else cls += 'todo'
              return (
                <div className="step-group" key={s}>
                  <div className={cls}>{s < step ? '✓' : s}</div>
                  <span className={`step-label${s === step ? ' active' : ''}`}>
                    {s===1?'Contact':s===2?'Project':'Vision'}
                  </span>
                  {s < 3 && <div className="step-line"></div>}
                </div>
              )
            })}
          </div>
        )}

        {step === 1 && (
          <div>
            <div className="form-group"><label>Your name</label><input className="field" id="name" placeholder="Ada Okonkwo" value={form.name} onChange={handleInputChange} /></div>
            <div className="form-group"><label>Email address</label><input className="field" id="email" type="email" placeholder="ada@company.com" value={form.email} onChange={handleInputChange} /></div>
            <div className="form-group"><label>Company (optional)</label><input className="field" id="company" placeholder="Acme Inc." value={form.company} onChange={handleInputChange} /></div>
            <div className="form-actions">
              <button className="btn-primary" disabled={!step1Valid} onClick={() => goToStep(2)}>
                Continue
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="form-group">
              <label>What are you building?</label>
              <div className="option-group">
                {['Web Application','Mobile App','Cloud Solution','AI Product','Design System','Other'].map(opt => (
                  <button key={opt} className={`opt-pill${form.type===opt?' selected':''}`} onClick={() => selectOption('type', opt)}>{opt}</button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Budget range</label>
              <div className="option-group">
                {['Under $10k','$10-30k','$30-75k','$75-150k','$150k+',"Let's discuss"].map(opt => (
                  <button key={opt} className={`opt-pill${form.budget===opt?' selected':''}`} onClick={() => selectOption('budget', opt)}>{opt}</button>
                ))}
              </div>
            </div>
            <div className="form-actions">
              <button className="btn-outline" onClick={() => goToStep(1)}>Back</button>
              <button className="btn-primary" disabled={!step2Valid} onClick={() => goToStep(3)}>
                Continue
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="form-group">
              <label>Describe your vision</label>
              <textarea className="field" rows="7" id="desc" placeholder="Tell us everything..." value={form.desc} onChange={handleInputChange}></textarea>
            </div>
            <div className="form-group">
              <label>Timeline</label>
              <div className="option-group">
                {['ASAP','1-3 months','3-6 months','6+ months'].map(opt => (
                  <button key={opt} className={`opt-pill${form.timeline===opt?' selected':''}`} onClick={() => selectOption('timeline', opt)}>{opt}</button>
                ))}
              </div>
            </div>
            <div className="form-actions">
              <button className="btn-outline" onClick={() => goToStep(2)}>Back</button>
              <button className="btn-primary" disabled={!step3Valid} onClick={startAnalysis}>
                Analyse & schedule
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        )}

        {analyzing && (
          <div className="analysis-panel">
            <div className="spinner analysis-spinner"></div>
            <p className="analysis-title">Analysing your brief...</p>
            <div className="analysis-log">
              {logLines.map((line, i) => (
                <div className="analysis-log-row" style={{opacity: i < logDone ? 1 : 0.2}} key={i}>
                  <span>{i < logDone ? '✓' : '-'}</span>
                  {line}
                </div>
              ))}
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{width:`${progress}%`}}></div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <div className="notice">
              <span className="notice-icon">✓</span>
              <p className="notice-text">Brief received - slots reserved. Pick a time that works.</p>
            </div>
            <h3 className="calendar-title">Choose a date</h3>
            <p className="calendar-subtitle">30-minute strategy session, video call.</p>
            <div className="calendar-card">
              <div className="calendar-header">
                <button className="calendar-nav" onClick={() => changeMonth(-1)} aria-label="Previous month">‹</button>
                <span>{MONTHS[calMonth]} {calYear}</span>
                <button className="calendar-nav" onClick={() => changeMonth(1)} aria-label="Next month">›</button>
              </div>
              <div className="calendar-weekdays">
                {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div className="calendar-weekday" key={d}>{d}</div>)}
              </div>
              <div className="calendar-days">
                {Array(firstDay).fill(null).map((_, i) => <div key={`empty-${i}`}></div>)}
                {Array(daysInMonth).fill(null).map((_, i) => {
                  const d = i+1
                  const avail = isDayAvailable(d)
                  return (
                    <button
                      key={d}
                      className={`cal-day${avail?' available':''}${selectedDate===d?' picked':''}`}
                      disabled={!avail}
                      onClick={() => avail && setSelectedDate(d)}
                    >{d}</button>
                  )
                })}
              </div>
            </div>

            {selectedDate && (
              <div className="time-picker">
                <p className="time-picker-label">
                  Available times - {MONTHS[calMonth]} {selectedDate}
                </p>
                <div className="timeslot-grid">
                  {TIME_SLOTS.map(t => (
                    <button key={t} className={`timeslot-btn${selectedTime===t?' selected':''}`} onClick={() => setSelectedTime(t)}>{t}</button>
                  ))}
                </div>
              </div>
            )}

            {selectedTime && (
              <button className="btn-primary confirm-booking-btn" disabled={submittingBooking} onClick={confirmBooking}>
                {submittingBooking ? 'Saving booking...' : `Confirm - ${MONTHS[calMonth]} ${selectedDate} at ${selectedTime}`}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            )}
            {bookingError && <p className="form-error">{bookingError}</p>}
          </div>
        )}

        {confirmed && (
          <div className="confirmed-panel">
            <div className="confirmed-icon">✓</div>
            <h2>You're booked in.</h2>
            <p className="confirmed-date">
              {MONTHS[calMonth]} {selectedDate} - {selectedTime} WAT
            </p>
            <p className="confirmed-note">
              A calendar invite will be sent to <strong>{form.email}</strong>
            </p>
            <div className="session-brief-card">
              <p className="session-brief-title">Session brief</p>
              {[
                ['Name', form.name],
                ['Email', form.email],
                ['Project type', form.type],
                ['Budget', form.budget || 'TBD'],
                ['Timeline', form.timeline || 'TBD']
              ].map(([k,v]) => (
                <div className="session-brief-row" key={k}>
                  <span>{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default LetsTalkPage
