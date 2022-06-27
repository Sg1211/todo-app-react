import React from 'react';

// Components
import Button from '../../atoms/button'
import InputField from '../../atoms/inputField';

const TodoForm = ({
    btnText, 
    btnType, 
    inputType, 
    inputValue, 
    onInputChange, 
    onFormSubmit
}) => {
  
    return (
        <>
            <InputField inputType={inputType} inputValue={inputValue} onInputChange={onInputChange}/>
            <Button btnType={btnType} btnText={btnText} onClick={onFormSubmit}/>
        </>
    )
}

export default TodoForm;

