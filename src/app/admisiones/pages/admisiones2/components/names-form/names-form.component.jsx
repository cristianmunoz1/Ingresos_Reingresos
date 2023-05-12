import { Divider } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import departments from '../../../../../shared/data/departments';
import useForm from '../../../../../shared/hooks/useForm';

const NamesForm = ({ steps, handleNext }) => {
  const [formValues, setFormValues] = useForm({
    firstName: '',
    middleName: '',
    firstSureName: '',
    secondSureName: '',
  });

  const { firstName, middleName, firstSureName, secondSureName } = formValues;

  return (
    <React.Fragment>
      <Typography gutterBottom>{steps.at(1)}</Typography>
      <Divider sx={{ margin: '5px 0px 10px 0px' }} />
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={setFormValues}
            label="Primer nombre"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="middleName"
            name="middleName"
            value={middleName}
            onChange={setFormValues}
            label="Segundo nombre"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="firstSureName"
            name="firstSureName"
            value={firstSureName}
            onChange={setFormValues}
            label="Primer apellido"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="secondSureName"
            name="secondSureName"
            value={secondSureName}
            onChange={setFormValues}
            label="Segundo apellido"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

NamesForm.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  handleNext: PropTypes.object,
};

export default NamesForm;
