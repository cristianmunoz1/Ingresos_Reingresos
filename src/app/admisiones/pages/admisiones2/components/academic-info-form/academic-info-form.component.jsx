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
import careers from '../../../../../shared/data/courses';
import incomingTypes from '../../../../../shared/data/incoming-types';
import modalities from '../../../../../shared/data/modalidad';
import sedes from '../../../../../shared/data/sedes';
import universities from '../../../../../shared/data/universities';
import useForm from '../../../../../shared/hooks/useForm';

const AcademicInfoForm = ({
  steps,
  activeStep,
  initialFormState,
  setMainFormValues,
}) => {
  const [formValues, setFormValues] = useForm(initialFormState);

  const { incomingType, career, sede, modality, universityOfOrigin } =
    formValues;

  const [disabled, setDisabled] = useState(activeStep !== 4);

  const handleInputChange = (event) => {
    setFormValues(event);
    setMainFormValues((mainFormState) => ({
      ...mainFormState,
      academicInfoForm: {
        ...formValues,
        [event.target.name]: event.target.value,
      },
    }));
  };

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
              onChange={handleInputChange}
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
              id="career"
              disabled={disabled}
              name="career"
              value={career}
              label="Programa"
              fullWidth
              onChange={handleInputChange}
            >
              {careers.map((career) => (
                <MenuItem key={career.id} value={career.name}>
                  {career.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              id="sede"
              disabled={disabled}
              name="sede"
              value={sede}
              label="Sede"
              fullWidth
              onChange={handleInputChange}
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
              id="modality"
              name="modality"
              disabled={disabled}
              value={modality}
              label="modality"
              fullWidth
              onChange={handleInputChange}
            >
              {modalities.map((modalidad) => (
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
              value={universityOfOrigin}
              label="Universidad de orígen"
              fullWidth
              onChange={handleInputChange}
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
              id="career"
              name="career"
              value={career}
              label="Carrera"
              disabled={disabled}
              fullWidth
              onChange={handleInputChange}
            >
              {careers.map((course) => (
                <MenuItem key={course.id} value={course.name}>
                  {course.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Select
              id="sede"
              name="sede"
              value={sede}
              disabled={disabled}
              label="Sede"
              fullWidth
              onChange={handleInputChange}
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
              id="modality"
              name="modality"
              disabled={disabled}
              value={modality}
              label="Modalidad"
              fullWidth
              onChange={handleInputChange}
            >
              {modalities.map((modalidad) => (
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
