// Hooks
import {useState } from 'react';

// Lodash
import _map from 'lodash/map';

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

        const isCompletedTodoList = (selectedId) => todoInfo => {
            if(todoInfo.id === selectedId)
                todoInfo.isCompleted = !todoInfo.isCompleted
            return todoInfo;
        }
    
        const onTodoItemClick = (selectedId) => {
            const newTodoList = _map(todoList, isCompletedTodoList(selectedId));
            updateTodoList(newTodoList);
        }

    return {todoText, handleTodoTextChange, handleTodoItemSave, onTodoItemClick}
}

export default useTodoSetup;