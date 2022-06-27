import React from 'react';

// Components
import TodoItem from '../todoItem';

// Styles
import "./TodoList.css"

const TodoList = ({todoList, onTodoDelete}) => {
  
    return (
      <>
        {
            todoList.map((todoInfo , index)=>{
                return (
                    <TodoItem
                        key={index}
                        todoInfo={todoInfo}
                        onTodoDelete={onTodoDelete}
                    />
                )
            })
        }
     </>
    )
}

export default TodoList;