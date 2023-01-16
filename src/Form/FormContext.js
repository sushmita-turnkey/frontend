import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = props => {
  const [formState, setFormState] = useState({});
  const handleChange = event => {
    if (event.target.type === 'radio') {
      setFormState({...formState, [event.target.name]: event.target.value });
    } else if (event.target.tagName === 'select') {
      let options = event.target.options;
      let selectedValue = options[options.selectedIndex].value;
      setFormState({...formState, [event.target.name]: selectedValue });
    } else {
      setFormState({...formState, [event.target.name]: event.target.value });
    }
  };

  return (
    <FormContext.Provider value={{ formState, handleChange,setFormState }}>
      {props.children}
    </FormContext.Provider>
  );
};
