import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthLoading from '../../../shared/components/auth-loading/auth-loading.component';
import SnackbarAlert from '../../../shared/components/snackbar-alert/snackbar-alert.component';
import { register } from '../../api/auth.api';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { authLoadingState } = useSelector((state) => state.authentication);

  const [displaySnackbarAlarm, setDisplaySnackbarAlarm] = useState();

  const handleRegister = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email').toString();
    const password = data.get('password').toString();
    const firstName = data.get('firstName').toString();
    const lastName = data.get('lastName').toString();
    const address = 'missing data';
    const phoneNumber = 'missing data';

    if (!email.trim().endsWith('@udea.edu.co')) {
      setDisplaySnackbarAlarm({
        message:
          'Email inválido, no cumple con el dominio de la universidad ❌',
        timeout: 3500,
      });
      return;
    }
    dispatch(
      register(firstName, lastName, email, password, address, phoneNumber)
    );
    setDisplaySnackbarAlarm({
      message: 'Registro exitoso, ahora puedes ingresar ✅',
      timeout: 3500,
    });
    setTimeout(() => {
      navigate('/auth/login');
    }, 4000);
  };

  useEffect(() => {
    setTimeout(() => setDisplaySnackbarAlarm(null), 4000);
  }, [displaySnackbarAlarm]);

  if (authLoadingState) {
    return <AuthLoading message="Espera un momento, registro en proceso..." />;
  }

  const handleGoHome = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleRegister}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Primer nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Segundo nombre"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              color="success"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              Crear cuenta
            </Button>
            <Button
              type="button"
              color="success"
              onClick={handleGoHome}
              sx={{ mt: 0, mb: 3 }}
              fullWidth
              variant="outlined"
            >
              Regresar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/auth/login">Ya tienes cuenta? Ingresa</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {displaySnackbarAlarm && <SnackbarAlert {...displaySnackbarAlarm} />}
    </React.Fragment>
  );
};

export default RegisterPage;
