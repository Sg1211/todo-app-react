import React from 'react';

// Components
import TodoItem from '../todoItem';

// Styles
import "./TodoList.css"

const TodoList = ({todoList, onTodoClick}) => {
  
    return (
      <>
        {
            todoList.map((todoInfo , index)=>{
                return (
                    <TodoItem
                        key={index}
                        todoInfo={todoInfo}
                        onTodoClick={onTodoClick}
                    />
                )
            })
        }
     </>
    )
}

export default TodoList;