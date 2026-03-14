import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/store'
import { setUser, logout } from '@/store/slices/auth'
import type { User } from '@/types'

export function useAuth() {
  const dispatch = useDispatch<AppDispatch>()
  const { isAuthenticated, user, isLoading } = useSelector((state: RootState) => state.auth)

  return {
    isAuthenticated,
    user,
    isLoading,
    setUser: (user: User) => dispatch(setUser(user)),
    logout: () => dispatch(logout()),
  }
}
