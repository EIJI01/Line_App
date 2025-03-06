import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import { AuthRoutes, PrivateRoutes } from './HandleRoutes';
import Profile from '../pages/private-pages/Profile';
import MainLayout from '../components/Layouts/MainLayout';
import { lazy, Suspense } from 'react';
import BlankLayout from '../components/Layouts/BlankLayout';
import ScanQRCode from '../pages/private-pages/ScanQRCode';
import Notification from '../pages/private-pages/Notification';
import { LoadingMainLayout } from '../components/Loader/LoadingMainLayout';

const Login = lazy(() => import('../pages/public-pages/Login'));
const Register = lazy(() => import('../pages/public-pages/Register'));

const RoutesConfig = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={ 
                  <MainLayout> 
                     <Suspense fallback={<LoadingMainLayout />}>
                        <App />
                     </Suspense>
                  </MainLayout> 
               }
            />
            <Route element={<AuthRoutes />}>
               <Route index path='/login' element={
                     <BlankLayout>
                        <Suspense fallback={<LoadingMainLayout />}>
                           <Login />
                        </Suspense>
                     </BlankLayout>
                  } 
               />
               <Route path='/register' element={
                     <BlankLayout>
                        <Suspense fallback={<LoadingMainLayout />}>
                           <Register />
                        </Suspense>
                     </BlankLayout>
                  }
               />
            </Route>

            <Route element={<PrivateRoutes />}>
               <Route path='/profile' element={
                     <MainLayout>
                        <Suspense fallback={<LoadingMainLayout />}>
                           <Profile />
                        </Suspense>
                     </MainLayout>
                  }
               />
               <Route path='/scan' element={
                     <MainLayout>
                        <Suspense fallback={<LoadingMainLayout />}>
                           <ScanQRCode />
                        </Suspense>
                     </MainLayout>
                  }
               />
               <Route path='/notification' element={
                     <MainLayout>
                        <Suspense fallback={<LoadingMainLayout />}>
                           <Notification />
                        </Suspense>
                     </MainLayout>
                  }
               />
            </Route>

            <Route path='*' element={<h1>404 Not Found</h1>} />
         </Routes>
      </BrowserRouter>
   );
};

export default RoutesConfig;
