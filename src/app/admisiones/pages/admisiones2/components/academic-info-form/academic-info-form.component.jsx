import {
  Divider,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import courses from '../../../../../shared/data/courses';
import incomingTypes from '../../../../../shared/data/incoming-types';
import modalidades from '../../../../../shared/data/modalidad';
import sedes from '../../../../../shared/data/sedes';
import universities from '../../../../../shared/data/universities';
import useForm from '../../../../../shared/hooks/useForm';

const AcademicInfoForm = ({
  steps,
  activeStep,
  initialFormState,
  setMainFormValues,
}) => {
  const [formValues, setFormValues] = useForm({ ...initialFormState });

  const { incomingType } = formValues;

  const [disabled, setDisabled] = useState(activeStep !== 4);

  useEffect(() => {
    setDisabled(activeStep !== 4);
  }, [activeStep]);

  return (
    <React.Fragment>
      <Typography gutterBottom>{steps.at(4)}</Typography>
      <Divider sx={{ margin: '5px 0px 10px 0px' }} />
      <Grid container spacing={1} mb={3}>
        <Grid item xs={12} sm={12}>
          <FormControl>
            <RadioGroup
              row
              id="incomingType"
              name="incomingType"
              value={incomingType}
              onChange={setFormValues}
            >
              {incomingTypes.map((incomingType) => (
                <FormControlLabel
                  key={incomingType.id}
                  disabled={disabled}
                  value={incomingType.name}
                  control={<Radio />}
                  label={incomingType.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      {incomingType === 'INGRESO_COMUN' && (
        <Grid container flex={true} spacing={1} mb={3}>
          <Grid item xs={12} sm={4}>
            <Select
              labelId="demo-simple-select-helper-label"
              id="Programa"
              disabled={disabled}
              name="Programa"
              value={courses.at(0)?.name}
              label="Discapacidad"
              fullWidth
              onChange={setFormValues}
            >
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.name}>
                  {course.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              id="Sede"
              disabled={disabled}
              name="Sede"
              value={sedes.at(0)?.name}
              label="Discapacidad"
              fullWidth
              onChange={setFormValues}
            >
              {sedes.map((sede) => (
                <MenuItem key={sede.id} value={sede.name}>
                  {sede.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              id="modalidad"
              name="modalidad"
              disabled={disabled}
              value={modalidades.at(0)?.name}
              label="Modalidad"
              fullWidth
              onChange={setFormValues}
            >
              {modalidades.map((modalidad) => (
                <MenuItem key={modalidad.id} value={modalidad.name}>
                  {modalidad.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      )}

      {incomingType === 'INGRESO_TRANSFERENCIA' && (
        <Grid container flex={true} spacing={1} mb={3}>
          <Grid item xs={12} sm={3}>
            <Select
              id="universityOfOrigin"
              name="universityOfOrigin"
              disabled={disabled}
              value={universities.at(0)?.name}
              label="Universidad de orígen"
              fullWidth
              onChange={setFormValues}
            >
              {universities.map((university) => (
                <MenuItem key={university.id} value={university.name}>
                  {university.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Select
              id="Programa"
              name="Programa"
              value={courses.at(0)?.name}
              label="Discapacidad"
              disabled={disabled}
              fullWidth
              onChange={setFormValues}
            >
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.name}>
                  {course.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Select
              id="Sede"
              name="Sede"
              value={sedes.at(0)?.name}
              disabled={disabled}
              label="Discapacidad"
              fullWidth
              onChange={setFormValues}
            >
              {sedes.map((sede) => (
                <MenuItem key={sede.id} value={sede.name}>
                  {sede.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Select
              id="modalidad"
              name="modalidad"
              disabled={disabled}
              value={modalidades.at(0)?.name}
              label="Modalidad"
              fullWidth
              onChange={setFormValues}
            >
              {modalidades.map((modalidad) => (
                <MenuItem key={modalidad.id} value={modalidad.name}>
                  {modalidad.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

AcademicInfoForm.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  activeStep: PropTypes.number,
  initialFormState: PropTypes.object,
  setMainFormValues: PropTypes.func,
};

export default AcademicInfoForm;
