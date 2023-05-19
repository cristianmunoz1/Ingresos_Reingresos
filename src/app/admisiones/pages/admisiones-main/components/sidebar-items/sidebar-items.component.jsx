import MenuBookIcon from '@mui/icons-material/MenuBook';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROLE } from '../../../../../../config/routers/AppRouter';

const SideBarItems = () => {
  const navigate = useNavigate();

  const { roles = [] } = useSelector((state) => state.authentication);

  const handleNavigate = (event, route) => {
    event.preventDefault();
    navigate(route);
  };

  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Registro
      </ListSubheader>


      <ListItemButton
        onClick={(e) => handleNavigate(e, '/home/admisiones/page2')}
      >
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Formulario " />
      </ListItemButton>

      <ListItemButton
        onClick={(e) => handleNavigate(e, '/home/admisiones/page222')}
      >
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Formulario v1" />
      </ListItemButton>

      <ListItemButton
        onClick={(e) => handleNavigate(e, '/home/admisiones/page3')}
      >
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Tabla" />
      </ListItemButton>



      {roles.includes(ADMIN_ROLE) && (
        <React.Fragment>
          <ListSubheader component="div" inset>
            Administrador
          </ListSubheader>

          <ListItemButton
            onClick={(e) => handleNavigate(e, '/admin/admisiones')}
          >
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="panel administrativo" />
          </ListItemButton>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default SideBarItems;
