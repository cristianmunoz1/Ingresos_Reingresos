import { Divider, MenuItem, Select } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import departments from '../../../../../shared/data/departments';
import docTypes from '../../../../../shared/data/document-types';
import useForm from '../../../../../shared/hooks/useForm';

const IdentityForm = ({
  steps,
  activeStep,
  initialFormState,
  setMainFormValues,
}) => {
  const [formValues, setFormValues] = useForm(initialFormState);
  const [disabled, setDisabled] = useState(activeStep !== 0);

  const { docType, docValue, docExpDate, department, city } = formValues;

  const handleInputChange = (event) => {
    setFormValues(event);
    setMainFormValues((mainFormState) => ({
      ...mainFormState,
      identityForm: {
        ...formValues,
        [event.target.name]: event.target.value,
      },
    }));
  };

  useEffect(() => {
    setDisabled(activeStep !== 0);
  }, [activeStep]);

  return (
    <React.Fragment>
      <Typography gutterBottom>{steps.at(0)}</Typography>
      <Divider sx={{ margin: '5px 0px 10px 0px' }} />
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={2}>
          <Select
            disabled={disabled}
            labelId="demo-simple-select-helper-label"
            id="docType"
            name="docType"
            value={docType}
            label="Tipo de identificación"
            fullWidth
            onChange={handleInputChange}
          >
            {docTypes.map((doc) => (
              <MenuItem key={doc.id} value={doc.name}>
                {doc.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            disabled={disabled}
            onChange={handleInputChange}
            value={docValue}
            id="docValue"
            name="docValue"
            label="Número de identificación"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="docExpDate"
            name="docExpDate"
            value={docExpDate}
            onChange={handleInputChange}
            disabled={disabled}
            label="Fecha de expedición"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="department"
            name="department"
            disabled={disabled}
            value={department}
            onChange={handleInputChange}
            label="Departamento"
            fullWidth
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
            id="city"
            name="city"
            disabled={disabled}
            value={city}
            onChange={handleInputChange}
            label="Municipio"
            fullWidth
          >
            {departments
              .find((dep) => `${dep.id}` === department)
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

IdentityForm.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  activeStep: PropTypes.number,
  initialFormState: PropTypes.object,
  setMainFormValues: PropTypes.func,
};

export default IdentityForm;
