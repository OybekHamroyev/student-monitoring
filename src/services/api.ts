import client from '@/api/client'
import type { UserRole } from '@/store/slices/auth'

// Auth API
export interface LoginResponseData {
  first_name: string | null
  last_name: string | null
  email: string
  birthday: string | null
  gender: string | null
  image: string | null
  address: string | null
  nationality: string | null
  passport_seria: string | null
  phone_number: string | null
  workplace: string | null
  role: string
}

export interface LoginResponse {
  success: boolean
  message: string
  data: LoginResponseData
  access: string
  refresh: string
  username: string
}

export const authApi = {
  login: (username: string, password: string) =>
    client.post<LoginResponse>('/login/', { username, password }),
  logout: () => client.post('/logout/'),
  getCurrentUser: () => client.get('/auth/me'),
}

export const normalizeUserRole = (role: string | null | undefined): UserRole => {
  const normalizedRole = (role || '')
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, '_')

  switch (normalizedRole) {
    case 'dekan':
    case 'dean':
      return 'dean'
    case 'dekan_o_rinbosari':
    case 'dekan_orinbosari':
    case 'vice_dean':
      return 'vice_dean'
    case 'tutor':
      return 'tutor'
    default:
      return 'admin'
  }
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

export interface HemisSyncResponse {
  message: string
  created: number
  updated: number
  last_page: number
}

export const hemisApi = {
  importStudents: () => client.post<HemisSyncResponse>('/import-students/'),
  updateStudents: () => client.post<HemisSyncResponse>('/update-students/'),
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
