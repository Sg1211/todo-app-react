import React from 'react';
import PropTypes from 'prop-types';

// Lodash
import _noop from 'lodash/noop';

// Constants
import { EMPTY_OBJECT } from '../../../../../../constants/todo.general'

//Styles
import "./TodoItem.css"

const TodoItem = ({todoInfo, onTodoItemClick }) => {

    const {id, text, isCompleted} = todoInfo;

    const onTodoClick = () => {
        onTodoItemClick(id)
    }

    const strikeClass = isCompleted ? "strike-class" : " ";  

    return (
        <div className='todo-item'>
            <div className={`todo-value ${strikeClass}`} onClick={onTodoClick}>{text}</div>
        </div>
    )
}

TodoItem.propTypes = {
    todoInfo: PropTypes.object,
    onTodoItemClick: PropTypes.func
};
  
TodoItem.defaultProps = {
    todoInfo: EMPTY_OBJECT,
    onTodoItemClick: _noop
};

export default TodoItem;