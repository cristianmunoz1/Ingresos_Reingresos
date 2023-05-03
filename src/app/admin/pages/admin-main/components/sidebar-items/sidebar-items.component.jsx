import MenuBookIcon from '@mui/icons-material/MenuBook';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const SideBarStandardsItems = () => {
  const navigate = useNavigate();

  const handleNavigate = (event, route) => {
    event.preventDefault();
    navigate(route);
  };

  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Administrador
      </ListSubheader>

      <ListItemButton onClick={(e) => handleNavigate(e, '/admin/admin1')}>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Titulo 1" />
      </ListItemButton>

      <ListItemButton
        onClick={(e) => handleNavigate(e, '/admin/admin1/admin11')}
      >
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Titulo 2" />
      </ListItemButton>

      <ListItemButton
        onClick={(e) => handleNavigate(e, '/admin/admin1/admin12')}
      >
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Titulo 3" />
      </ListItemButton>

      <ListItemButton
        onClick={(e) => handleNavigate(e, '/admin/admin1/admin13')}
      >
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Titulo 4" />
      </ListItemButton>

      <ListSubheader component="div" inset>
        Admisiones
      </ListSubheader>

      <ListItemButton onClick={(e) => handleNavigate(e, '/home/home1')}>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Estudiantes" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default SideBarStandardsItems;
