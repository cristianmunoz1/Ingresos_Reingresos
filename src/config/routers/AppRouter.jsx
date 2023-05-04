import React, { useEffect, useState } from 'react';
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
import AdmisionesPage4 from '../../app/admisiones/pages/admisiones4/admisiones4-page.component';
import { refreshToken } from '../../app/auth/api/auth.api';
import LoginPage from '../../app/auth/pages/login/login-page.component';
import RecoverPage from '../../app/auth/pages/recover/recover-page.component';
import RegisterPage from '../../app/auth/pages/register/register-page.component';
import LandingPage from '../../app/landing/pages/landing/landing-page.component';
import NotFoundPage from '../../app/landing/pages/not-found/not-found-page.component';
import ProgramaAcademicoMainPage from '../../app/programa-academico/pages/programa-academico-main/admisiones-main-page.component';
import ProgramaAcademicoPage1 from '../../app/programa-academico/pages/programa-academico1/admisiones1-page.component';
import ProgramaAcademicoPage2 from '../../app/programa-academico/pages/programa-academico2/admisiones2-page.component';
import ProgramaAcademicoPage3 from '../../app/programa-academico/pages/programa-academico3/admisiones3-page.component';
import AuthLoading from '../../app/shared/components/auth-loading/auth-loading.component';
import ProfilePage from '../../app/user/pages/profile/profile-page.component';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SnackbarAlert from '../../app/shared/components/snackbar-alert/snackbar-alert.component';
import { removeUIError } from '../../app/shared/redux/actions/shared.actions';

export const STUDENT_ROLE = 'ROLE_STUDENT';
export const TEACHER_ROLE = 'ROLE_TEACHER';
export const ADMIN_ROLE = 'ROLE_ADMIN';

const AppRouter = () => {
  const dispatch = useDispatch();
  const [displaySnackbarAlarm, setDisplaySnackbarAlarm] = useState();
  const { error } = useSelector((state) => state.shared);
  const { state: errorState, message: errorMessage } = error;

  const { loading } = useSelector((state) => state.shared);

  const { loading: loadingState, loading: loadingMessage } = loading;

  useEffect(() => {
    if (errorState) {
      setDisplaySnackbarAlarm({
        message: `${errorMessage} ❌`,
        timeout: 3500,
      });
      setTimeout(() => dispatch(removeUIError()), 3500);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    dispatch(refreshToken(token));
  }, []);

  if (loadingState) {
    return <AuthLoading message={loadingMessage} />;
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
          <Route path="admisiones" element={<AdmisionesMainPage />}>
            <Route path="" element={<AdmisionesPage1 />} />
            <Route path="page2" element={<AdmisionesPage2 />} />
            <Route path="page3" element={<AdmisionesPage3 />} />
            <Route path="page4" element={<AdmisionesPage4 />} />
          </Route>
          <Route
            path="programa-academico"
            element={<ProgramaAcademicoMainPage />}
          >
            <Route path="" element={<ProgramaAcademicoPage1 />} />
            <Route path="home12" element={<ProgramaAcademicoPage2 />} />
            <Route path="home13" element={<ProgramaAcademicoPage3 />} />
          </Route>
        </Route>

        <Route
          path="/admin"
          element={<PrivateRoute allRequiredRoles={[ADMIN_ROLE]} />}
        >
          <Route path="admisiones" element={<AdminMainPage />}>
            <Route path="" element={<AdminPage1 />} />
            <Route path="admin2" element={<AdminPage2 />} />
            <Route path="admin3" element={<AdminPage3 />} />
          </Route>
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
      {displaySnackbarAlarm && <SnackbarAlert {...displaySnackbarAlarm} />}
    </BrowserRouter>
  );
};

export default AppRouter;
