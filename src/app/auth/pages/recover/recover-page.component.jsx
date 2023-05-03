import React from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordRecoveryStepper from './components/stepper/password-recovery-stepper.component';

const RecoverPage = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <PasswordRecoveryStepper />
    </React.Fragment>
  );
};

export default RecoverPage;
