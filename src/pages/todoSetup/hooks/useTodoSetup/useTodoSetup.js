// Hooks
import {useState } from 'react';

// Lodash
import _map from 'lodash/map';

// Helpers
import { createTodoItem } from './useTodoSetup.helpers'

function useTodoSetup(todoList, updateTodoList, saveTodoList) {
    const [todoText, setTodoText] = useState("");

       const handleTodoTextChange = (e) => {
            setTodoText(e.target.value);
        }

        const handleTodoItemSave = (e) => {
            e.preventDefault();
            if (!todoText) return;
             
            const newTodoInfo = createTodoItem(todoList, todoText);
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