import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './not-found-page.component.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/auth/login');
  };

  const handleGoHome = () => {
    navigate('/home/admisiones');
  };

  return (
    <React.Fragment>
      <Container sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: '30px', margin: '50px' }}>
          404 - Página no encontrada
        </Typography>{' '}
        <Divider />
        <Typography sx={{ margin: '20px' }}>
          La página que estás buscando no ha sido encontrada
        </Typography>
        <img
          src="/static/img/common/404-not-found.png"
          className="not-found__image"
        />
        <Divider />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <Button
              type="submit"
              fullWidth
              color="success"
              onClick={handleGoHome}
              variant="outlined"
              sx={{ mt: 0, mb: 3 }}
            >
              Ir a la página principal
            </Button>
            <Typography>
              Si esto no funciona, intenta realizar login nuevamente
            </Typography>{' '}
            <Button
              color="success"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default NotFoundPage;
