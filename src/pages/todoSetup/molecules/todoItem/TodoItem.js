import React from 'react';
import PropTypes from 'prop-types';

// Lodash
import _noop from 'lodash/noop';

// Constants
import { EMPTY_OBJECT } from '../../../../constants/todo.general'

//Styles
import "./TodoItem.css"

const TodoItem = ({todoInfo, onTodoClick }) => {

    const {id, text, isCompleted} = todoInfo;

    const onClick = () => {
        onTodoClick(id)
    }

    const strikeClass = isCompleted ? "strike-class" : " ";  

    return (
        <div className='todo-item'>
            <div className={`todo-value ${strikeClass}`} onClick={onClick}>{text}</div>
        </div>
    )
}

TodoItem.propTypes = {
    todoInfo: PropTypes.object,
    onTodoClick: PropTypes.func
};
  
TodoItem.defaultProps = {
    todoInfo: EMPTY_OBJECT,
    onTodoClick: _noop
};

export default TodoItem;