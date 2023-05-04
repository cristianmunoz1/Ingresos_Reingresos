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
        Admisiones
      </ListSubheader>

      <ListItemButton onClick={(e) => handleNavigate(e, '/admin/admisiones')}>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Titulo 1" />
      </ListItemButton>

      <ListItemButton
        onClick={(e) => handleNavigate(e, '/admin/admisiones/page2')}
      >
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Titulo 2" />
      </ListItemButton>

      <ListItemButton
        onClick={(e) => handleNavigate(e, '/admin/admisiones/page3')}
      >
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Titulo 3" />
      </ListItemButton>

      <ListItemButton
        onClick={(e) => handleNavigate(e, '/admin/admisiones/page4')}
      >
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Totulo 4" />
      </ListItemButton>

      {roles.includes(ADMIN_ROLE) && (
        <React.Fragment>
          <ListSubheader component="div" inset>
            Administrador
          </ListSubheader>

          <ListItemButton
            onClick={(e) => handleNavigate(e, '/home/admisiones')}
          >
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="panel estudiantil" />
          </ListItemButton>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default SideBarItems;
