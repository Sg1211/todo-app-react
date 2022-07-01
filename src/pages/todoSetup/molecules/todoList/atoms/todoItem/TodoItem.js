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

    const getTodoItemClass = () => { 
        const className = isCompleted ? "strike-class" : " " 
        return `todo-value ${className}`;
    }
      

    return (
        <div className='todo-item'>
            <div className={getTodoItemClass()} onClick={onTodoClick}>{text}</div>
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