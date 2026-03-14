import client from '@/api/client';
// Auth API
export const authApi = {
    login: (email, password) => client.post('/auth/login', { email, password }),
    logout: () => client.post('/auth/logout'),
    getCurrentUser: () => client.get('/auth/me'),
};
// Students API
export const studentsApi = {
    getList: (page, limit) => client.get('/students', { params: { page, limit } }),
    getById: (id) => client.get(`/students/${id}`),
    create: (data) => client.post('/students', data),
    update: (id, data) => client.put(`/students/${id}`, data),
    delete: (id) => client.delete(`/students/${id}`),
    search: (query) => client.get('/students/search', { params: { q: query } }),
};
// Groups API
export const groupsApi = {
    getList: (page, limit) => client.get('/groups', { params: { page, limit } }),
    getById: (id) => client.get(`/groups/${id}`),
    create: (data) => client.post('/groups', data),
    update: (id, data) => client.put(`/groups/${id}`, data),
    delete: (id) => client.delete(`/groups/${id}`),
};
// Tutors API
export const tutorsApi = {
    getList: (page, limit) => client.get('/tutors', { params: { page, limit } }),
    getById: (id) => client.get(`/tutors/${id}`),
    create: (data) => client.post('/tutors', data),
    update: (id, data) => client.put(`/tutors/${id}`, data),
    delete: (id) => client.delete(`/tutors/${id}`),
};
// Audit API
export const auditApi = {
    getLog: (page, limit) => client.get('/audit', { params: { page, limit } }),
};
// Settings API
export const settingsApi = {
    getDeanSettings: () => client.get('/settings/dean'),
    updateDeanSettings: (data) => client.put('/settings/dean', data),
};
