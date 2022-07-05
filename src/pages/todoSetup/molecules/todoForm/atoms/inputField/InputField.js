import React from 'react'
import PropTypes from 'prop-types';

// Lodash
import _noop from 'lodash/noop';

//Styles
import "./InputField.css"

const InputField = ({inputType, todoText, handleTodoTextChange}) => {

    return (
        <input 
            type={inputType} 
            value={todoText} 
            onChange={handleTodoTextChange}
            className="input"
        />
    )
}

InputField.propTypes = {
    inputType: PropTypes.string,
    todoText: PropTypes.string,
    handleTodoTextChange: PropTypes.func
  };
  
InputField.defaultProps = {
    inputType: '',
    todoText: '',
    handleTodoTextChange: _noop
  };

export default React.memo(InputField);
