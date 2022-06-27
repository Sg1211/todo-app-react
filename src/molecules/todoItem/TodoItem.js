import React from 'react';

//Styles
import "./TodoItem.css"

const TodoItem = ({todoInfo, onTodoDelete }) => {

    const {id, text} = todoInfo;

    const _onTodoDelete = () => {
        onTodoDelete(id)
    }
  
    return (
        <div className='todo-item'>
            <div className='todo-value'>{text}</div>
            <div className='todo-delete' onClick={_onTodoDelete}>
                <i className="fa fa-trash"></i>
            </div>
        </div>
    )
}

export default TodoItem;