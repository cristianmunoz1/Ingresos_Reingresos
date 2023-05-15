import { useState } from 'react';

const useForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckedChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked,
    });
  };

  const resetForm = (state) => {
    setFormValues(state);
  };

  return [formValues, handleInputChange, handleCheckedChange, resetForm];
};

export default useForm;
