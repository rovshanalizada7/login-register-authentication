import { useAuth } from '../store/auth.store';
import { Navigate, Outlet } from 'react-router-dom';

export const RequireAuth = () => {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to="/auth/login" />;
};
