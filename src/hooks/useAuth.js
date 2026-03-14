import { useSelector, useDispatch } from 'react-redux';
import { setUser, logout } from '@/store/slices/auth';
export function useAuth() {
    const dispatch = useDispatch();
    const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth);
    return {
        isAuthenticated,
        user,
        isLoading,
        setUser: (user) => dispatch(setUser(user)),
        logout: () => dispatch(logout()),
    };
}
