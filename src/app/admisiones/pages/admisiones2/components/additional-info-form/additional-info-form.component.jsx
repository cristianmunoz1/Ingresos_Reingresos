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
import React from 'react';
import genderTypes from '../../../../../shared/data/gender-types';
import useForm from '../../../../../shared/hooks/useForm';
import specialIncomeTypes from '../../../../../shared/data/special-income-types';
import phonePrefixes from '../../../../../shared/data/phone-prefixes';
import disabilityTypes from '../../../../../shared/data/disability-types';

const AdditionalInfoForm = ({ steps, handleNext }) => {
  const [formValues, setFormValues] = useForm({
    specialIncome: false,
    specialIncomeType: specialIncomeTypes.at(0)?.id,
    email: '',
    phonePrefix: '',
    phoneNumber: '',
  });

  const { specialIncome, specialIncomeType, email, phoneNumber, phonePrefix } =
    formValues;

  return (
    <React.Fragment>
      <Typography gutterBottom>{steps.at(3)}</Typography>
      <Divider sx={{ margin: '5px 0px 10px 0px' }} />
      <Grid container spacing={1} mb={3}>
        <Grid item xs={12} sm={2}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="idType"
            name="idType"
            value={genderTypes.at(0)?.name}
            label="Género"
            fullWidth
            onChange={setFormValues}
          >
            {genderTypes.map((doc) => (
              <MenuItem key={doc.id} value={doc.name}>
                {doc.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            value="specialIncome"
            control={<Checkbox />}
            label="¿Ingreso especial?"
            labelPlacement="top"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="specialIncome"
            name="specialIncome"
            value={specialIncomeTypes.at(0)?.name}
            label="Ingreso especial"
            fullWidth
            onChange={setFormValues}
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
            value={email}
            onChange={setFormValues}
            label="Email"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="phonePrefix"
            name="phonePrefix"
            value={phonePrefix}
            label="Prefijo"
            fullWidth
            onChange={setFormValues}
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
            name="phoneNumber"
            value={phoneNumber}
            onChange={setFormValues}
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
            value="specialIncome"
            control={<Checkbox />}
            label="¿Presenta alguna discapacidad?"
            labelPlacement="top"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="Discapacidad"
            name="Discapacidad"
            value={disabilityTypes.at(0)?.name}
            label="Discapacidad"
            fullWidth
            onChange={setFormValues}
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
            value="specialIncome"
            control={
              <Button variant="contained" fullWidth component="label">
                Subir archivo
                <input type="file" hidden />
              </Button>
            }
            label="Subir acta de bachiller"
            labelPlacement="start"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

AdditionalInfoForm.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  handleNext: PropTypes.object,
};

export default AdditionalInfoForm;
