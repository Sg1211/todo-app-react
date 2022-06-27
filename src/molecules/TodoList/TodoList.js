import React from 'react';

// Components
import TodoItem from '../todoItem';

// Styles
import "./TodoList.css"

const TodoList = ({todoList, onTodoDelete}) => {
  
    return (
      <>
        {
            todoList.map((todoVal, index)=>{
                return (
                    <TodoItem
                        key={index}
                        id={index}
                        todoText={todoVal}
                        onTodoDelete={onTodoDelete}
                    />
                )
            })
        }
     </>
    )
}

export default TodoList;