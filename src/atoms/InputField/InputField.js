import React from 'react'

import "./InputField.css"

const InputField = ({inputType, inputValue, onInputChange}) => {

    return (
        <input 
            type={inputType} 
            value={inputValue} 
            onChange={onInputChange}
            className="input"
        />
    )
}

export default InputField
