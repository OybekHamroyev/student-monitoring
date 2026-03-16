import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/store'
import { setLoading, setUser } from '@/store/slices/auth'
import { setTheme } from '@/store/slices/theme'
import { setLanguage } from '@/store/slices/language'
import i18n from '@/i18n'

// Layouts
import AppShell from '@/layouts/AppShell'
import { Toaster } from '@/components/shared/Toaster'

// Pages
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import Students from '@/pages/Students'
import Groups from '@/pages/Groups'
import Tutors from '@/pages/Tutors'
import Search from '@/pages/Search'
import Settings from '@/pages/Settings'
import Audit from '@/pages/Audit'
import StudentProfile from '@/pages/StudentProfile'
import ComponentsDemo from '@/pages/ComponentsDemo'
import NotFound from '@/pages/NotFound'

const AUTH_USER_STORAGE_KEY = 'auth_user'
const REFRESH_TOKEN_STORAGE_KEY = 'refresh_token'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth)

  if (isLoading) {
    return null
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <AppShell>{children}</AppShell>
}

export default function App() {
  const dispatch = useDispatch<AppDispatch>()
  const [isBootstrapped, setIsBootstrapped] = useState(false)

  useEffect(() => {
    dispatch(setLoading(true))

    const savedTheme = localStorage.getItem('theme') || 'system'
    dispatch(setTheme(savedTheme as 'light' | 'dark' | 'system'))
    const savedLang = localStorage.getItem('language') as 'en' | 'ru' | 'uz' | null
    if (savedLang && ['en', 'ru', 'uz'].includes(savedLang)) {
      dispatch(setLanguage(savedLang))
      i18n.changeLanguage(savedLang)
    }

    const savedToken = localStorage.getItem('auth_token')
    const savedUser = localStorage.getItem(AUTH_USER_STORAGE_KEY)

    if (savedToken && savedUser) {
      try {
        dispatch(setUser(JSON.parse(savedUser)))
      } catch {
        localStorage.removeItem(AUTH_USER_STORAGE_KEY)
        localStorage.removeItem('auth_token')
        localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY)
      }
    }

    dispatch(setLoading(false))
    setIsBootstrapped(true)
  }, [dispatch])

  if (!isBootstrapped) {
    return null
  }

  return (
    <>
      <Toaster />
      <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <Students />
          </ProtectedRoute>
        }
      />
      <Route
        path="/students/:id"
        element={
          <ProtectedRoute>
            <StudentProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/groups"
        element={
          <ProtectedRoute>
            <Groups />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tutors"
        element={
          <ProtectedRoute>
            <Tutors />
          </ProtectedRoute>
        }
      />
      <Route
        path="/search"
        element={
          <ProtectedRoute>
            <Search />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/audit"
        element={
          <ProtectedRoute>
            <Audit />
          </ProtectedRoute>
        }
      />
      <Route
        path="/components-demo"
        element={
          <ProtectedRoute>
            <ComponentsDemo />
          </ProtectedRoute>
        }
      />

      {/* Catch all */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}
