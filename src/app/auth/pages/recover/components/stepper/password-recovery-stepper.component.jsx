import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordRecoveryEmailSender from '../step1/password-recovery-step1.component';
import ResetPasswordForm from '../step2/password-recovery-step2.component';

const steps = [
  { label: 'Ingresa tu correo electrónico institucional', required: true },
  { label: 'Cambia tu contraseña', required: true },
];

const PasswordRecoveryStepper = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return !steps.at(step)?.required || false;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleGoToLogin = () => {
    navigate('/auth/login');
  };

  return (
    <Container>
      <Container>
        <Typography variant="h5" sx={{ textAlign: 'center', margin: '30px' }}>
          Recuperación de contraseña
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map(({ label, required }, index) => {
              const stepProps = {};
              const labelProps = {};
              if (!required) {
                labelProps.optional = (
                  <Typography variant="caption">Opcional</Typography>
                );
              } else {
                labelProps.optional = (
                  <Typography variant="caption">Requerido</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length && (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Todos los pasos han sido completados, ya puedes usar tu nueva
                contraseña
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button variant="contained" onClick={handleGoToLogin}>
                  Ir al login
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Container>
      {activeStep === 0 && (
        <PasswordRecoveryEmailSender
          setEmail={setEmail}
          handleNext={handleNext}
        />
      )}
      {activeStep === 1 && (
        <ResetPasswordForm email={email} handleNext={handleNext} />
      )}
    </Container>
  );
};

export default PasswordRecoveryStepper;
