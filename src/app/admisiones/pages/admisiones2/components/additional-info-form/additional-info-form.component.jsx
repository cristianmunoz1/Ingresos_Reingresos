import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  MenuItem,
  Select,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import genderTypes from '../../../../../shared/data/gender-types';
import useForm from '../../../../../shared/hooks/useForm';
import specialIncomeTypes from '../../../../../shared/data/special-income-types';
import phonePrefixes from '../../../../../shared/data/phone-prefixes';
import disabilityTypes from '../../../../../shared/data/disability-types';
import { uploadFileToCloudinary } from '../../../../api/cloudinary.api';
import SnackbarAlert from '../../../../../shared/components/snackbar-alert/snackbar-alert.component';

const AdditionalInfoForm = ({
  steps,
  activeStep,
  initialFormState,
  setMainFormValues,
  docValue,
}) => {
  const [uploadedFile, setUploadedFile] = useState();
  const [displayAlarm, setDisplayAlarm] = useState(false);
  const [formValues, setFormValues, handleCheckedChange] =
    useForm(initialFormState);
  const [disabled, setDisabled] = useState(activeStep !== 3);

  const {
    gender,
    specialIncome,
    specialIncomeType,
    email,
    phonePrefix,
    phoneNumber,
    disability,
    disabilityType,
    // diploma,
  } = formValues;

  const handleInputChange = (event) => {
    setFormValues(event);
    setMainFormValues((mainFormState) => ({
      ...mainFormState,
      additionalInfoForm: {
        ...formValues,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const checkedChange = (event) => {
    handleCheckedChange(event);
    setMainFormValues((mainFormState) => ({
      ...mainFormState,
      additionalInfoForm: {
        ...formValues,
        [event.target.name]: event.target.checked,
      },
    }));
  };

  const handleUploadFile = async (e) => {
    const file = e.target.files[0];
    const response = await uploadFileToCloudinary(
      file,
      `/admisiones/diplomas/${docValue}`
    );
    setUploadedFile(response);
    const event = {
      target: {
        name: e.target.name,
        value: JSON.stringify(response),
      },
    };
    handleInputChange(event);
  };

  useEffect(() => {
    setDisabled(activeStep !== 3);
  }, [activeStep]);

  useEffect(() => {
    setDisplayAlarm(true);
  }, [uploadedFile]);

  return (
    <React.Fragment>
      <Typography gutterBottom>{steps.at(3)}</Typography>
      <Divider sx={{ margin: '5px 0px 10px 0px' }} />
      <Grid container spacing={1} mb={3}>
        <Grid item xs={12} sm={2}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="gender"
            name="gender"
            disabled={disabled}
            value={gender}
            label="Género"
            fullWidth
            onChange={handleInputChange}
          >
            {genderTypes.map((gender) => (
              <MenuItem key={gender.id} value={gender.name}>
                {gender.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={specialIncome}
                onChange={checkedChange}
                id="specialIncome"
                name="specialIncome"
                disabled={disabled}
              />
            }
            label="¿Ingreso especial?"
            labelPlacement="top"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Select
            id="specialIncomeType"
            disabled={disabled || !specialIncome}
            name="specialIncomeType"
            value={specialIncomeType}
            label="Ingreso especial"
            fullWidth
            onChange={handleInputChange}
          >
            {specialIncomeTypes.map((doc) => (
              <MenuItem key={doc.id} value={doc.name}>
                {doc.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="email"
            name="email"
            disabled={disabled}
            value={email}
            onChange={handleInputChange}
            label="Email"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="phonePrefix"
            disabled={disabled}
            name="phonePrefix"
            value={phonePrefix}
            label="Prefijo"
            fullWidth
            onChange={handleInputChange}
          >
            {phonePrefixes.map((prefix) => (
              <MenuItem key={prefix.code} value={prefix.code}>
                {prefix.code} - {prefix.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="phoneNumber"
            disabled={disabled}
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleInputChange}
            label="Número de celular"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid
        container
        flex={true}
        justifyContent={'space-evenly'}
        spacing={1}
        mb={3}
      >
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            value="disability"
            control={
              <Checkbox
                checked={disability}
                onChange={checkedChange}
                id="disability"
                name="disability"
                disabled={disabled}
              />
            }
            label="¿Presenta alguna discapacidad?"
            labelPlacement="top"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Select
            id="disabilityType"
            name="disabilityType"
            disabled={disabled}
            value={disabilityType}
            label="Discapacidad"
            fullWidth
            onChange={handleInputChange}
          >
            {disabilityTypes.map((disability) => (
              <MenuItem key={disability.id} value={disability.name}>
                {disability.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            value="diploma"
            control={
              <Button
                variant="contained"
                fullWidth
                component="label"
                disabled={disabled}
              >
                Subir archivo
                <input
                  id="diploma"
                  name="diploma"
                  onChange={handleUploadFile}
                  disabled={disabled}
                  type="file"
                  hidden
                />
              </Button>
            }
            label="Subir acta de bachiller"
            labelPlacement="start"
          />
        </Grid>
      </Grid>
      {uploadedFile && (
        <SnackbarAlert
          message={`El archivo ${uploadedFile.original_filename}.${uploadedFile.format} se ha subido correctamente. ✅`}
          timeout={5000}
          open={displayAlarm}
          setOpen={setDisplayAlarm}
        />
      )}
    </React.Fragment>
  );
};

AdditionalInfoForm.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  activeStep: PropTypes.number,
  docValue: PropTypes.string,
  initialFormState: PropTypes.object,
  setMainFormValues: PropTypes.func,
};

export default AdditionalInfoForm;
