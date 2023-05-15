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
import React, { useState } from 'react';
import departments from '../../../../../shared/data/departments';
import docTypes from '../../../../../shared/data/document-types';
import specialIncomeTypes from '../../../../../shared/data/special-income-types';
import useForm from '../../../../../shared/hooks/useForm';
import AcademicInfoForm from '../academic-info-form/academic-info-form.component';
import AdditionalInfoForm from '../additional-info-form/additional-info-form.component';
import BornAndResidenceForm from '../born-form/born-form.component';
import IdentityForm from '../identity-form/identity-form.component';
import NamesForm from '../names-form/names-form.component';
import genderTypes from '../../../../../shared/data/gender-types';
import disabilityTypes from '../../../../../shared/data/disability-types';
import incomingTypes from '../../../../../shared/data/incoming-types';
import careers from '../../../../../shared/data/courses';
import sedes from '../../../../../shared/data/sedes';
import modalities from '../../../../../shared/data/modalidad';
import universities from '../../../../../shared/data/universities';
import { useDispatch, useSelector } from 'react-redux';
import { registerStudentAction } from '../../../../api/admisiones.api';
import RequestLoading from '../../../../../shared/components/request-loading/request-loading.component';
const steps = [
  'Identificación',
  'Nombres y apellidos',
  'Nacimiento y residencia',
  'Información adicional',
  'Tipo de ingreso',
];

const theme = createTheme();

const IngresosForm = () => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);

  const [formValues, setFormValues] = useState({
    identityForm: {
      docType: docTypes[0].name,
      docValue: '',
      docExpDate: '',
      department: departments[0].id + '',
      city: departments[0].regions[0].id + '',
    },
    namesForm: {
      firstName: '',
      middleName: '',
      firstSureName: '',
      secondSureName: '',
    },
    bornAndResidenceForm: {
      birthday: '',
      birthDepartment: departments[0].id + '',
      birthCity: departments[0].regions[0].id + '',
      residenceDepartment: departments[0].id + '',
      residenceCity: departments[0].regions[0].id + '',
    },
    additionalInfoForm: {
      gender: genderTypes[0].name + '',
      specialIncome: false,
      specialIncomeType: specialIncomeTypes.at(0)?.id,
      email: '',
      phonePrefix: '',
      phoneNumber: '',
      disability: false,
      disabilityType: disabilityTypes[0].name,
      diploma: undefined,
    },
    academicInfoForm: {
      incomingType: incomingTypes[0].name,
      career: careers[0].name,
      sede: sedes[0].name,
      modality: modalities[0].name,
      universityOfOrigin: universities[0].name,
    },
  });

  const {
    identityForm,
    namesForm,
    bornAndResidenceForm,
    additionalInfoForm,
    academicInfoForm,
  } = formValues;

  const registerStudent = (event) => {
    event.preventDefault();
    dispatch(registerStudentAction(formValues));
  };

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
          {/* {JSON.stringify(formValues)} */}
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
              <IdentityForm
                initialFormState={identityForm}
                setMainFormValues={setFormValues}
                steps={steps}
                activeStep={activeStep}
              />

              <NamesForm
                initialFormState={namesForm}
                setMainFormValues={setFormValues}
                steps={steps}
                activeStep={activeStep}
              />

              <BornAndResidenceForm
                initialFormState={bornAndResidenceForm}
                setMainFormValues={setFormValues}
                steps={steps}
                activeStep={activeStep}
              />

              <AdditionalInfoForm
                initialFormState={additionalInfoForm}
                setMainFormValues={setFormValues}
                steps={steps}
                activeStep={activeStep}
                docValue={identityForm.docValue}
              />

              <AcademicInfoForm
                initialFormState={academicInfoForm}
                setMainFormValues={setFormValues}
                steps={steps}
                activeStep={activeStep}
              />

              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button
                    color="success"
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Atrás
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="success"
                  onClick={(event) =>
                    activeStep === steps.length - 1
                      ? registerStudent(event)
                      : handleNext(event)
                  }
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
