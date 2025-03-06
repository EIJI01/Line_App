import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

export const PrivateRoutes = () => {
   const { liffInfo } = useAuthContext();
   return liffInfo.isLoggedIn ? <Outlet /> : <Navigate to={'/login'} replace />;
};

export const AuthRoutes = () => {
   const { liffInfo } = useAuthContext();
   return !liffInfo.isLoggedIn ? <Outlet /> : <Navigate to={'/'} />;
};
