// Hooks
import {useState } from 'react';

// Lodash
import _map from 'lodash/map';

function useTodoSetup(todoList, updateTodoList, saveTodoList) {
    const [todoText, setTodoText] = useState("");

       const handleTodoTextChange = (e) => {
            setTodoText(e.target.value);
        }

        const todoItemCreation = () => {
            const newTodoInfo = {};
            newTodoInfo.id = todoList.length + 1;
            newTodoInfo.text = todoText;
            newTodoInfo.isCompleted = false;
            return newTodoInfo;
        }
    
        const handleTodoItemSave = (e) => {
            e.preventDefault();
            if (!todoText) return;
             
            const newTodoInfo = todoItemCreation();
            updateTodoList(newTodoInfo);
            setTodoText("");
        }

        const isCompletedTodoList = (selectedId) => todoInfo => {
            if(todoInfo.id === selectedId)
                todoInfo.isCompleted = !todoInfo.isCompleted
            return todoInfo;
        }
    
        const onTodoItemClick = (selectedId) => {
            const newTodoList = _map(todoList, isCompletedTodoList(selectedId));
            saveTodoList(newTodoList);
        }

    return {todoText, handleTodoTextChange, handleTodoItemSave, onTodoItemClick}
}

export default useTodoSetup;