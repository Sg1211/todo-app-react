import React from 'react';

//Styles
import "./Button.css"

const Button = ({btnType, btnText, onClick}) => {

    return (
      <button type={btnType} className="button" onClick={onClick}>{btnText}</button>
    )
};

export default Button;