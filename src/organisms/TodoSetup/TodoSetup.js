import React, {useState} from 'react';

import InputForm from '../../molecules/InputForm/InputForm';
import TodoList from '../../molecules/TodoList/TodoList';
import Header from '../../atoms/Header/Header';

import "./TodoSetup.css"

const TodoSetup = () => {
    const [todoVal, setTodoVal] = useState("");
    const [todoList, setTodoList] = useState([]);

    const onInputChange = (e) => {
        setTodoVal(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!todoVal) return;

        const newTodo = [...todoList, todoVal];
        setTodoList(newTodo);
        setTodoVal("");
    }

    const onTodoDelete = (index) => {
        const newTodos = [...todoList];
        newTodos.splice(index, 1);
        setTodoList(newTodos);
    }
  
    return (
        <div className='todo-container'>
            <div className='todo-heading'>
             <Header heading="My Todo App"/>
            </div>
            <div className='todo-form'>
             <InputForm
                btnText="add-todo"
                btnType="submit"
                inputType="text"
                inputValue={todoVal}
                onInputChange={onInputChange}
                onFormSubmit={onFormSubmit}/>
            </div>
            <div className='todo-list'>
             <TodoList
                todoList={todoList}
                onTodoDelete={onTodoDelete}
               />
            </div>
        </div>
    )
}

export default TodoSetup;