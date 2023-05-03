import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordRecoveryEmailSender = () => {
  const [checkingAuthState, setCheckingAuthState] = useState(false);
  const navigate = useNavigate();

  const handleSendRecoveryEmail = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email').toString();
    setCheckingAuthState(true);
  };

  const handleGoToLogin = (event) => {
    event.preventDefault();
    navigate('/auth/login');
  };

  if (checkingAuthState) {
    return <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
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
            Recuperación de cuenta
          </Typography>
          <Box
            component="form"
            onSubmit={handleSendRecoveryEmail}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              color="success"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar correo de recuperación
            </Button>
            <Button
              type="button"
              color="success"
              onClick={handleGoToLogin}
              sx={{ mt: 0, mb: 3 }}
              fullWidth
              variant="outlined"
            >
              Regresar
            </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default PasswordRecoveryEmailSender;
