import React from 'react';

// Components
import TodoForm from '../../molecules/todoForm';
import TodoList from '../../molecules/todoList';
import Header from '../../atoms/header';

// Hooks
import useFetchData from './hooks/useFetchData';
import useTodoSetup from './hooks/useTodoSetup';

// Styles
import "./TodoSetup.css"

const TodoSetup = () => {
    const {todoList, setTodoList} = useFetchData();
    const {todoText, onInputChange, onFormSubmit, onTodoClick} = useTodoSetup(todoList, setTodoList);


    const renderTodoForm = () => {
        return (
            <TodoForm
                btnText="add-todo"
                btnType="submit"
                inputType="text"
                inputValue={todoText}
                onInputChange={onInputChange}
                onFormSubmit={onFormSubmit}
            />
        )
    }

    const renderTodoList = () => {
        return (
            <TodoList
                todoList={todoList}
                onTodoClick={onTodoClick}
            />
        )
    }
  
    return (
        <div className='todo-container'>
            <div className='todo-heading'>
             <Header heading="My Todo App"/>
            </div>
            <div className='todo-form'>
             {renderTodoForm()}
            </div>
            <div className='todo-list'>
             {renderTodoList()}
            </div>
        </div>
    )
}

export default TodoSetup;