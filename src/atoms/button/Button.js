import React from 'react';
import PropTypes from 'prop-types';

// Lodash
import _noop from 'lodash/noop';

//Styles
import "./Button.css"

const Button = ({btnType, btnText, onClick}) => {

    return (
      <button type={btnType} className="button" onClick={onClick}>{btnText}</button>
    )
};

Button.propTypes = {
  btnType: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  btnType: '',
  btnText: '',
  onClick: _noop
};

export default Button;