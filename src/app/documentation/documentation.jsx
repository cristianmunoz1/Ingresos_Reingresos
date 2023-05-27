import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { logoutAction } from '../auth/redux/actions/auth.actions';
import SideBarItems from '../admisiones/pages/admisiones-main/components/sidebar-items/sidebar-items.component.jsx';
import '../documentation/components/styles/documentation.css';

const DocumentationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { firstName, lastName, username } = useSelector(
        (state) => state.authentication
    );

    const handleLogout = (event) => {
        event.preventDefault();
        dispatch(logoutAction({}));
        localStorage.clear();
        navigate('/auth/login');
    };

    const drawerWidth = 240;

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const Drawer = styled(MuiDrawer, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }));

    const mdTheme = createTheme();

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex', marginBottom: '20px' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                            backgroundColor: '#7ABA7E',
                        }}
                    >
                        <img
                            src={'/static/img/logo/logosimbolo-horizontal-blanco.png'}
                            width={150}
                            alt="logo"
                        />
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Documentación
                        </Typography>
                        <Typography align="right">
                            {firstName} - {lastName} ({' '}
                            <span style={{ fontWeight: 'bolder' }}>{username}</span> )
                        </Typography>
                        <Button
                            onClick={handleLogout}
                            variant="contained"
                            sx={{ marginLeft: 3 }}
                            color="success"
                        >
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <SideBarItems />
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                        marginTop: '33px',
                    }}
                >
                    <div className='contenedor-documentacion'>


                        <div className="stackedit__html">
                            <h1 id="ingresos-y-reingresos-udea-frontend">
                                Ingresos y reingresos UdeA (FrontEnd)
                            </h1>
                            <h2 id="introducción">Introducción</h2>
                            <p>
                                El presente proyecto, está enfocado en el módulo de ingresos y reingresos de
                                la Universidad de Antioquia.
                            </p>
                            <h2 id="descripción">Descripción</h2>
                            <p>
                                En el programa se podrá gestionar el ingreso de estudiantes, asignándoles un
                                puntaje y activándolos en el sistema. Por otro lado, el aspirante tiene la
                                posibilidad de registrar su información y esperar hasta que admisiones y
                                registro active su perfil en el sistema.
                            </p>
                            <h2 id="acceso-al-proyecto">Acceso al proyecto</h2>
                            <p>
                                Link al repositorio de GitHub:{' '}
                                <a href="https://github.com/cristianmunoz1/Ingresos_Reingresos">
                                    https://github.com/cristianmunoz1/Ingresos_Reingresos
                                </a>
                            </p>
                            <h2 id="módulos">Módulos</h2>
                            <h3 id="registro">Registro</h3>
                            <p>
                                El sistema cuenta con un módulo de registro, en el cual las personas podrán
                                ingresar información personal básica y una contraseña.
                                <br />
                                Internamente se le asigna un rol en específico a cada perfil para que este
                                pueda hacer correcto uso de la plataforma.
                                <br />
                                El sistema cuenta con un link de verificación al correo electrónico que
                                llega momentos después de realizar el primer registro en la plataforma.
                            </p>
                            <h3 id="ingreso">Ingreso</h3>
                            <p>
                                El sistema cuenta con un login, en el cual, las personas podrán iniciar
                                sesión o recuperar su contraseña si es necesario.
                            </p>
                            <h3 id="listado-de-admitidos">Listado de admitidos</h3>
                            <p>
                                El sistema muestra a los funcionarios de admisiones y registro, una lista
                                con las personas que registraron su información en el formulario, para que
                                estos puedan ingresar el puntaje del exámen de admisión y activarlo como
                                estudiante en el sistema.
                            </p>
                            <h2 id="roles">Roles</h2>
                            <p>En el sistema se podrá contar con 3 roles diferentes, los cuales son:</p>
                            <ol>
                                <li>Aspirante</li>
                                <li>Funcionario de admisiones y registro</li>
                                <li>Administrador del sistema</li>
                            </ol>
                        </div>
                    </div>
                    <Outlet />
                </Box>


            </Box>
        </ThemeProvider >
    );
};

export default DocumentationPage;