import { useState } from "react";

export const useForm = (initialConfig) => {
    const [formState, setFormState] = useState(initialConfig);

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState, 
            [name]:value
        })
    }

    const onResetForm = () =>{
        setFormState(initialConfig);
    }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
