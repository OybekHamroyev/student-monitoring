import client from '@/api/client'

// Auth API
export const authApi = {
  login: (email: string, password: string) =>
    client.post('/auth/login', { email, password }),
  logout: () => client.post('/auth/logout'),
  getCurrentUser: () => client.get('/auth/me'),
}

// Students API
export const studentsApi = {
  getList: (page?: number, limit?: number) =>
    client.get('/students', { params: { page, limit } }),
  getById: (id: string) => client.get(`/students/${id}`),
  create: (data: any) => client.post('/students', data),
  update: (id: string, data: any) => client.put(`/students/${id}`, data),
  delete: (id: string) => client.delete(`/students/${id}`),
  search: (query: string) => client.get('/students/search', { params: { q: query } }),
}

// Groups API
export const groupsApi = {
  getList: (page?: number, limit?: number) =>
    client.get('/groups', { params: { page, limit } }),
  getById: (id: string) => client.get(`/groups/${id}`),
  create: (data: any) => client.post('/groups', data),
  update: (id: string, data: any) => client.put(`/groups/${id}`, data),
  delete: (id: string) => client.delete(`/groups/${id}`),
}

// Tutors API
export const tutorsApi = {
  getList: (page?: number, limit?: number) =>
    client.get('/tutors', { params: { page, limit } }),
  getById: (id: string) => client.get(`/tutors/${id}`),
  create: (data: any) => client.post('/tutors', data),
  update: (id: string, data: any) => client.put(`/tutors/${id}`, data),
  delete: (id: string) => client.delete(`/tutors/${id}`),
}

// Audit API
export const auditApi = {
  getLog: (page?: number, limit?: number) =>
    client.get('/audit', { params: { page, limit } }),
}

// Settings API
export const settingsApi = {
  getDeanSettings: () => client.get('/settings/dean'),
  updateDeanSettings: (data: any) => client.put('/settings/dean', data),
}
