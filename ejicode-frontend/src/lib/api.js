const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api/v1'

async function request(path, options = {}) {
  const token = localStorage.getItem('ejicode_admin_token')
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
    credentials: 'include',
  })
  const body = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(body.message || 'Request failed')
  }

  return body
}

export function submitBooking(payload) {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function adminLogin(credentials) {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
}

export function getContacts() {
  return request('/contact?limit=100')
}

export function setAdminToken(token) {
  localStorage.setItem('ejicode_admin_token', token)
}

export function clearAdminToken() {
  localStorage.removeItem('ejicode_admin_token')
}
