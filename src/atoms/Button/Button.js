import React from 'react';

import "./Button.css"

const Button = ({btnType, btnText}) => {

    return (
      <button type={btnType} className="button">{btnText}</button>
    )
};

export default Button;