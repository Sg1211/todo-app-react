import React from 'react';
import PropTypes from 'prop-types';
 
const NoTodos = ({errorText}) => {
   return (
       <h1>{errorText}</h1>
   );
};

NoTodos.propTypes = {
    errorText: PropTypes.string
  };
  
NoTodos.defaultProps = {
    errorText:'No Data Found'
  };
 
export default NoTodos;