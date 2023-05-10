import { useState } from 'react';

const useForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = (state) => {
    setFormValues(state);
  };

  return [formValues, handleInputChange, resetForm];
};

export default useForm;
