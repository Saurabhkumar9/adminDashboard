import React, { createContext, useState } from 'react';


const FormContext = createContext();

const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState(null);

    
    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
}

export { FormContext, FormProvider };
