import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import AdditionalInfoForm from '../additional-info-form/additional-info-form.component';
import BornAndResidenceForm from '../born-form/identity-form.component';
import IdentityForm from '../identity-form/identity-form.component';
import NamesForm from '../names-form/names-form.component';
import AcademicInfoForm from '../academic-info-form/academic-info-form.component';

const steps = [
  'Identificación',
  'Nombres y apellidos',
  'Nacimiento y residencia',
  'Información adicional',
  'Tipo de ingreso',
];

const theme = createTheme();

const IngresosForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" sx={{ mt: 3, mb: 5, maxWidth: '100%' }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <IdentityForm steps={steps} activeStep={activeStep} />
              <NamesForm steps={steps} activeStep={activeStep} />
              <BornAndResidenceForm steps={steps} activeStep={activeStep} />
              <AdditionalInfoForm steps={steps} activeStep={activeStep} />
              <AcademicInfoForm steps={steps} activeStep={activeStep} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Atrás
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Registrar' : 'Siguiente'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default IngresosForm;
