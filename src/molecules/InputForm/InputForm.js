import React from 'react';
import Button from '../../atoms/Button/Button';
import InputField from '../../atoms/InputField/InputField';

import "./InputForm.css";

const InputForm = ({
    btnText, 
    btnType, 
    inputType, 
    inputValue, 
    onInputChange, 
    onFormSubmit
}) => {
  
    return (
        <form onSubmit={onFormSubmit}>
            <InputField inputType={inputType} inputValue={inputValue} onInputChange={onInputChange}/>
            <Button btnType={btnType} btnText={btnText}/>
        </form>
    )
}

export default InputForm;

