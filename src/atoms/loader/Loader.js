import React from 'react';
import PropTypes from 'prop-types';
 
const Loader = ({loadingText}) => {
   return (
       <h1>{loadingText}</h1>
   );
};

Loader.propTypes = {
    loadingText: PropTypes.string
  };
  
Loader.defaultProps = {
    loadingText:'Fetching data'
  };
 
export default Loader;