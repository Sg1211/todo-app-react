import React from 'react';
import PropTypes from 'prop-types';
 
const Header = ({heading}) => {
   return (
       <h1>{heading}</h1>
   );
};

Header.propTypes = {
    heading: PropTypes.string
  };
  
Header.defaultProps = {
    heading:''
  };
 
export default Header;