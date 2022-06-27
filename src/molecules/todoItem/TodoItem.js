import React from 'react';

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

export default TodoItem;