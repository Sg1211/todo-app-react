import React from 'react';

//Styles
import "./TodoItem.css"

const TodoItem = ({id, todoText, onTodoDelete }) => {

    const _onTodoDelete = () => {
        onTodoDelete(id)
    }
  
    return (
        <div className='todo-item'>
            <div className='todo-value'>{todoText}</div>
            <div className='todo-delete' onClick={_onTodoDelete}>
                <i className="fa fa-trash"></i>
            </div>
        </div>
    )
}

export default TodoItem;