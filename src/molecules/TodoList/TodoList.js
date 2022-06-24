import React from 'react';

import TodoItem from '../TodoItem/TodoItem';

import "./TodoList.css"

const TodoList = ({todoList, onTodoDelete}) => {
  
    return (
      <>
        {
            todoList.map((todoVal, index)=>{
                return (
                    <TodoItem
                        key={index}
                        todoText={todoVal}
                        onTodoDelete={() => onTodoDelete(index)}
                    />
                )
            })
        }
     </>
    )
}

export default TodoList;