import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../store/auth.store';

export const NonAuthCheck = () => {
  const { token } = useAuth();
  return !token ? <Outlet /> : <Navigate to="/profile" />;
};
