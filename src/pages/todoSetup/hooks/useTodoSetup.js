// Hooks
import {useState } from 'react';

function useTodoSetup(todoList, updateTodoList) {
    const [todoText, setTodoText] = useState("");

       const handleTodoTextChange = (e) => {
            setTodoText(e.target.value);
        }
    
        const handleTodoItemSave = (e) => {
            e.preventDefault();
            if (!todoText) return;
            
            const newTodoInfo = {};
            newTodoInfo.id = todoList.length + 1;
            newTodoInfo.text = todoText;
            newTodoInfo.isCompleted = false;
    
            const newTodoList = [...todoList, newTodoInfo];
            updateTodoList(newTodoList);
            setTodoText("");
        }
    
        const onTodoClick = (selectedId) => {
            const newTodoList = todoList.map((todoInfo) => {
                if(todoInfo.id === selectedId && todoInfo.isCompleted === false)
                     todoInfo.isCompleted = true;
                return todoInfo;
            })
            updateTodoList(newTodoList);
        }

    return {todoText, handleTodoTextChange, handleTodoItemSave, onTodoClick}
}

export default useTodoSetup;