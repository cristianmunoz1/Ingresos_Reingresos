import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';
import PropTypes from 'prop-types';

const Copyright = ({ styles }) => {
  const companyUrl = 'TODO: Agregar aquí el copyright';

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...styles}
    >
      {'Copyright © '}
      <Link color="inherit" href={companyUrl}>
        UdeA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

Copyright.propTypes = {
  styles: PropTypes.object,
};

export default Copyright;
