import React, {useState, useEffect} from 'react';

// Components
import TodoForm from '../../molecules/todoForm';
import TodoList from '../../molecules/todoList';
import Header from '../../atoms/header';

// Constants
import MOCK_TODO_LIST from './constants/mockTodoList';
import { EMPTY_ARRAY } from '../../constants/todo.general';

// Utils
import { fetchData } from '../../utils/fetchData';

// Styles
import "./TodoSetup.css"

const TodoSetup = () => {
    const [todoText, setTodoText] = useState("");
    const [todoList, setTodoList] = useState(EMPTY_ARRAY);

    useEffect(() => {
        fetchData(MOCK_TODO_LIST, 2000).then((list) => setTodoList(list));
    }, EMPTY_ARRAY);

    
    const onInputChange = (e) => {
        setTodoText(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!todoText) return;
        
        const newTodoInfo = {};
        newTodoInfo.id = todoList.length + 1;
        newTodoInfo.text = todoText;

        const newTodoList = [...todoList, newTodoInfo];
        setTodoList(newTodoList);
        setTodoText("");
    }

    const onTodoDelete = (selectedId) => {
        const newTodos = [...todoList];
        const filteredTodos = newTodos.filter((todoInfo) => todoInfo.id !== selectedId);
        setTodoList(filteredTodos);
    }

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
             {renderTodoForm()}
            </div>
            <div className='todo-list'>
             {renderTodoList()}
            </div>
        </div>
    )
}

export default TodoSetup;