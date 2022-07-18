import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );//resetea los valores del form osea en blanco o vacios
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
