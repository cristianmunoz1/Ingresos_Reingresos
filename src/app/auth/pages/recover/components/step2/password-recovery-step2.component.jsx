import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ResetPasswordForm = ({ email, handleNext }) => {
  const [checkingAuthState, setCheckingAuthState] = useState(false);

  const handleResetPassword = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email').toString();
    const code = data.get('code').toString();
    const password = data.get('password').toString();
    setCheckingAuthState(true);
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
            Recuperar
          </Typography>
          <Box
            component="form"
            onSubmit={handleResetPassword}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              value={email}
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="code"
              label="Código de recuperación"
              name="code"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Nueva contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Resetear contraseña
            </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

ResetPasswordForm.propTypes = {
  email: PropTypes.string,
  handleNext: PropTypes.object,
};

export default ResetPasswordForm;
