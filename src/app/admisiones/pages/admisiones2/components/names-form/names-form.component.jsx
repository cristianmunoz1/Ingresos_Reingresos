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

const NamesForm = ({ steps }) => {
  const [formValues, setFormValues] = useForm({
    docType: '',
    docValue: '',
    department: departments.at(0)?.id + '',
  });

  const { docType, docValue, department } = formValues;

  const handleChange = (event) => {
    setFormValues(event);
  };

  return (
    <React.Fragment>
      <Typography gutterBottom>{steps.at(0)}</Typography>
      {JSON.stringify(
        departments.find((dep) => dep.id + '' === department)?.regions.at(0)
          ?.name + ''
      )}
      <Divider sx={{ margin: '5px 0px 10px 0px' }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

NamesForm.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
};

export default NamesForm;
