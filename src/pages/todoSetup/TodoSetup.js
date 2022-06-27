import React, {useState, useEffect} from 'react';

// Components
import TodoForm from '../../molecules/todoForm';
import TodoList from '../../molecules/todoList';
import Header from '../../atoms/header';

// Constants
import { MOCK_TODO_LIST } from '../../constants/mockData';

// utils
import { fetchData } from '../../utils/fetchData';

// Styles
import "./TodoSetup.css"

const TodoSetup = () => {
    const [todoVal, setTodoVal] = useState("");
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        fetchData(MOCK_TODO_LIST, 2000).then((list) => setTodoList(list));
    }, []);

    
    const onInputChange = (e) => {
        setTodoVal(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!todoVal) return;
        
        const newTodoInfo = {};
        newTodoInfo.id = todoList.length + 1;
        newTodoInfo.text = todoVal;

        const newTodoList = [...todoList, newTodoInfo];
        setTodoList(newTodoList);
        setTodoVal("");
    }

    const onTodoDelete = (selectedId) => {
        const newTodos = [...todoList];
        const filteredTodos = newTodos.filter((todoInfo) => todoInfo.id !== selectedId);
        setTodoList(filteredTodos);
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