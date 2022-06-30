import React from 'react';
import PropTypes from 'prop-types';
 
const ErrorField = ({errorText}) => {
   return (
       <h1>{errorText}</h1>
   );
};

ErrorField.propTypes = {
    errorText: PropTypes.string
  };
  
ErrorField.defaultProps = {
    errorText:''
  };
 
export default ErrorField;