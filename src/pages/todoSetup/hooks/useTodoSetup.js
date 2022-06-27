// Hooks
import {useState } from 'react';

function useTodoSetup(todoList, setTodoList) {
    const [todoText, setTodoText] = useState("");

       const onInputChange = (e) => {
            setTodoText(e.target.value);
        }
    
        const onFormSubmit = (e) => {
            e.preventDefault();
            if (!todoText) return;
            
            const newTodoInfo = {};
            newTodoInfo.id = todoList.length + 1;
            newTodoInfo.text = todoText;
            newTodoInfo.isCompleted = false;
    
            const newTodoList = [...todoList, newTodoInfo];
            setTodoList(newTodoList);
            setTodoText("");
        }
    
        const onTodoClick = (selectedId) => {
            const newTodoList = todoList.map((todoInfo) => {
                if(todoInfo.id === selectedId && todoInfo.isCompleted === false)
                     todoInfo.isCompleted = true;
                return todoInfo;
            })
            setTodoList(newTodoList);
        }

    return {todoText, onInputChange, onFormSubmit, onTodoClick}
}

export default useTodoSetup;