import { Divider, MenuItem, Select } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import departments from '../../../../../shared/data/departments';
import useForm from '../../../../../shared/hooks/useForm';

const BornAndResidenceForm = ({
  steps,
  activeStep,
  initialFormState,
  setMainFormValues,
}) => {
  const [formValues, setFormValues] = useForm(initialFormState);

  const {
    birthday,
    birthDepartment,
    birthCity,
    residenceDepartment,
    residenceCity,
  } = formValues;

  const handleInputChange = (event) => {
    setFormValues(event);
    setMainFormValues((mainFormState) => ({
      ...mainFormState,
      bornAndResidenceForm: {
        ...formValues,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const [disabled, setDisabled] = useState(activeStep !== 2);

  useEffect(() => {
    setDisabled(activeStep !== 2);
  }, [activeStep]);

  return (
    <React.Fragment>
      <Typography gutterBottom>{steps.at(2)}</Typography>
      <Divider sx={{ margin: '5px 0px 10px 0px' }} />
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="birthday"
            disabled={disabled}
            name="birthday"
            label="Fecha de nacimiento"
            fullWidth
            value={birthday}
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Select
            id="birthDepartment"
            disabled={disabled}
            name="birthDepartment"
            value={birthDepartment}
            label="Departamento de nacimiento"
            fullWidth
            onChange={handleInputChange}
          >
            {departments.map((dep) => (
              <MenuItem key={dep.id} value={dep.id + ''}>
                {dep.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Select
            id="birthCity"
            disabled={disabled}
            name="birthCity"
            value={birthCity}
            label="Municipio de nacimiento"
            fullWidth
            onChange={handleInputChange}
          >
            {departments
              .find((dep) => `${dep.id}` === birthDepartment)
              ?.regions.map((reg) => (
                <MenuItem key={`${reg.id}`} value={`${reg.id}`}>
                  {reg.name}
                </MenuItem>
              ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Select
            id="residenceDepartment"
            disabled={disabled}
            name="residenceDepartment"
            value={residenceDepartment}
            label="Departamento de residencia"
            fullWidth
            onChange={handleInputChange}
          >
            {departments.map((dep) => (
              <MenuItem key={dep.id} value={dep.id + ''}>
                {dep.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Select
            id="residenceCity"
            disabled={disabled}
            name="residenceCity"
            value={residenceCity}
            label="Municipio de residencia"
            fullWidth
            onChange={handleInputChange}
          >
            {departments
              .find((dep) => `${dep.id}` === residenceDepartment)
              ?.regions.map((reg) => (
                <MenuItem key={`${reg.id}`} value={`${reg.id}`}>
                  {reg.name}
                </MenuItem>
              ))}
          </Select>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

BornAndResidenceForm.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  activeStep: PropTypes.number,
  initialFormState: PropTypes.object,
  setMainFormValues: PropTypes.func,
};

export default BornAndResidenceForm;
