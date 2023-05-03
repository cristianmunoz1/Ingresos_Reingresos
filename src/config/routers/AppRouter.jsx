import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminMainPage from '../../app/admin/pages/admin-main/admin-main-page.component';
import AdminPage1 from '../../app/admin/pages/admin1/admin1-page.component';
import AdminPage2 from '../../app/admin/pages/admin2/admin2-page.component';
import AdminPage3 from '../../app/admin/pages/admin3/admin3-page.component';
import AdmisionesMainPage from '../../app/admisiones/pages/admisiones-main/admisiones-main-page.component';
import AdmisionesPage1 from '../../app/admisiones/pages/admisiones1/admisiones1-page.component';
import AdmisionesPage2 from '../../app/admisiones/pages/admisiones2/admisiones2-page.component';
import AdmisionesPage3 from '../../app/admisiones/pages/admisiones3/admisiones3-page.component';
import { refreshToken } from '../../app/auth/api/auth.api';
import LoginPage from '../../app/auth/pages/login/login-page.component';
import RecoverPage from '../../app/auth/pages/recover/recover-page.component';
import RegisterPage from '../../app/auth/pages/register/register-page.component';
import AuthLoading from '../../app/shared/components/auth-loading/auth-loading.component';
import ProfilePage from '../../app/user/pages/profile/profile-page.component';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LandingPage from '../../app/landing/pages/landing/landing-page.component';
import NotFoundPage from '../../app/landing/pages/not-found/not-found-page.component';

export const STUDENT_ROLE = 'ROLE_STUDENT';
export const TEACHER_ROLE = 'ROLE_TEACHER';
export const ADMIN_ROLE = 'ROLE_ADMIN';

const AppRouter = () => {
  const { authLoadingState, authLoadingMessage } = useSelector(
    (state) => state.authentication
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    dispatch(refreshToken(token));
  }, []);

  if (authLoadingState) {
    return <AuthLoading message={authLoadingMessage} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />

        <Route
          path="/home"
          element={
            <PrivateRoute
              anyRequiredRole={[STUDENT_ROLE, TEACHER_ROLE, ADMIN_ROLE]}
            />
          }
        >
          <Route path="home1" element={<AdmisionesMainPage />}>
            <Route path="home11" element={<AdmisionesPage1 />} />
            <Route path="home12" element={<AdmisionesPage2 />} />
            <Route path="home13" element={<AdmisionesPage3 />} />
          </Route>
        </Route>

        <Route
          path="/admin"
          element={<PrivateRoute allRequiredRoles={[ADMIN_ROLE]} />}
        >
          <Route path="admin1" element={<AdminMainPage />}>
            <Route path="admin11" element={<AdminPage1 />} />
            <Route path="admin12" element={<AdminPage2 />} />
            <Route path="admin13" element={<AdminPage3 />} />
          </Route>
          <Route path="admin2" element={<AdminPage2 />} />
        </Route>

        <Route
          path="/account"
          element={
            <PrivateRoute anyRequiredRole={[STUDENT_ROLE, TEACHER_ROLE]} />
          }
        >
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        <Route path="/auth" element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="recover" element={<RecoverPage />} />
        </Route>

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
