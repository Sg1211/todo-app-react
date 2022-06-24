import React from 'react';

import "./TodoItem.css"

const TodoItem = ({todoText, onTodoDelete }) => {
  
    return (
        <div className='todo-item'>
            <div className='todo-value'>{todoText}</div>
            <div className='todo-delete' onClick={onTodoDelete}>
                <i className="fa fa-trash"></i>
            </div>
        </div>
    )
}

export default TodoItem;