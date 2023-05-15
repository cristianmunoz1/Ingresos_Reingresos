import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import useForm from '../../../../../shared/hooks/useForm';

const NamesForm = ({
  steps,
  activeStep,
  initialFormState,
  setMainFormValues,
}) => {
  const [formValues, setFormValues] = useForm(initialFormState);

  const { firstName, middleName, firstSureName, secondSureName } = formValues;

  const handleInputChange = (event) => {
    setFormValues(event);
    setMainFormValues((mainFormState) => ({
      ...mainFormState,
      namesForm: {
        ...formValues,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const [disabled, setDisabled] = useState(activeStep !== 1);

  useEffect(() => {
    setDisabled(activeStep !== 1);
  }, [activeStep]);

  return (
    <React.Fragment>
      <Typography gutterBottom>{steps.at(1)}</Typography>
      <Divider sx={{ margin: '5px 0px 10px 0px' }} />
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            disabled={disabled}
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            label="Primer nombre"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="middleName"
            name="middleName"
            disabled={disabled}
            value={middleName}
            onChange={handleInputChange}
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
            disabled={disabled}
            value={firstSureName}
            onChange={handleInputChange}
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
            disabled={disabled}
            value={secondSureName}
            onChange={handleInputChange}
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
  activeStep: PropTypes.number,
  initialFormState: PropTypes.object,
  setMainFormValues: PropTypes.func,
};

export default NamesForm;
