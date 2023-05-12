import { Divider, MenuItem, Select } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import departments from '../../../../../shared/data/departments';
import docTypes from '../../../../../shared/data/document-types';
import useForm from '../../../../../shared/hooks/useForm';

const BornAndResidenceForm = ({ steps, handleNext }) => {
  const [isDepartmentSelected, setIsDepartmentSelected] = useState(false);
  const [formValues, setFormValues] = useForm({
    docType: '',
    docValue: '',
    department: departments.at(0)?.id + '',
  });

  const { docType, docValue, department } = formValues;

  return (
    <React.Fragment>
      <Typography gutterBottom>{steps.at(2)}</Typography>
      <Divider sx={{ margin: '5px 0px 10px 0px' }} />
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="idValue"
            name="idValue"
            label="Número de identificación"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="departament"
            name="department"
            value={departments.at(0)?.id + ''}
            label="Departamento"
            fullWidth
            onChange={setFormValues}
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
            labelId="demo-simple-select-helper-label"
            id="departament"
            name="department"
            value={
              departments
                .find((dep) => dep.id + '' === department)
                ?.regions.at(0)?.id + ''
            }
            label="Municipio"
            fullWidth
            onChange={setFormValues}
          >
            {departments
              .find((dep) => dep.id + '' === department)
              ?.regions.map((reg) => (
                <MenuItem key={reg.id} value={reg.id + ''}>
                  {reg.name}
                </MenuItem>
              ))}{' '}
          </Select>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="departament"
            name="department"
            value={departments.at(0)?.id + ''}
            label="Departamento"
            fullWidth
            onChange={setFormValues}
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
            labelId="demo-simple-select-helper-label"
            id="departament"
            name="department"
            value={
              departments
                .find((dep) => dep.id + '' === department)
                ?.regions.at(0)?.id + ''
            }
            label="Municipio"
            fullWidth
            onChange={setFormValues}
          >
            {departments
              .find((dep) => dep.id + '' === department)
              ?.regions.map((reg) => (
                <MenuItem key={reg.id} value={reg.id + ''}>
                  {reg.name}
                </MenuItem>
              ))}{' '}
          </Select>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

BornAndResidenceForm.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  handleNext: PropTypes.object,
};

export default BornAndResidenceForm;
