import React, {useState} from 'react';

// Components
import TodoForm from '../../molecules/todoForm';
import TodoList from '../../molecules/todoList';
import Header from '../../atoms/header';

// Styles
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

    const _getTodoForm = () => {
        return (
            <TodoForm
                btnText="add-todo"
                btnType="submit"
                inputType="text"
                inputValue={todoVal}
                onInputChange={onInputChange}
                onFormSubmit={onFormSubmit}
            />
        )
    }

    const _getTodoList = () => {
        return (
            <TodoList
                todoList={todoList}
                onTodoDelete={onTodoDelete}
            />
        )
    }
  
    return (
        <div className='todo-container'>
            <div className='todo-heading'>
             <Header heading="My Todo App"/>
            </div>
            <div className='todo-form'>
             {_getTodoForm()}
            </div>
            <div className='todo-list'>
             {_getTodoList()}
            </div>
        </div>
    )
}

export default TodoSetup;