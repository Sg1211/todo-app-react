import React from 'react';
import PropTypes from 'prop-types';

// Lodash
import _noop from 'lodash/noop';

// Components
import Button from '../../../../atoms/button'
import InputField from './atoms/inputField';

const TodoForm = ({
    btnText, 
    btnType, 
    inputType, 
    todoText, 
    handleTodoTextChange, 
    handleTodoItemSave
}) => {
  
    return (
        <>
            <InputField inputType={inputType} todoText={todoText} handleTodoTextChange={handleTodoTextChange}/>
            <Button btnType={btnType} btnText={btnText} onClick={handleTodoItemSave}/>
        </>
    )
}

TodoForm.propTypes = {
    btnType: PropTypes.string,
    btnText: PropTypes.string,
    inputType: PropTypes.string,
    todoText: PropTypes.string,
    handleTodoTextChange: PropTypes.func,
    handleTodoItemSave: PropTypes.func
};
  
TodoForm.defaultProps = {
    btnType: '',
    btnText: '',
    inputType: '',
    todoText: '',
    handleTodoTextChange: _noop,
    handleTodoItemSave: _noop
};

export default TodoForm;

