// Hooks
import {useState, useCallback } from 'react';

// Lodash
import _map from 'lodash/map';

// Helpers
import { createTodoItem } from './useTodoSetup.helpers'

function useTodoSetup(todoList, updateTodoList, saveTodoList) {
    const [todoText, setTodoText] = useState("");

       const handleTodoTextChange = useCallback((e) => {
            setTodoText(e.target.value);
        },[setTodoText]);

        const createTodoInfo = (todoList, todoText) => {
            if (!todoText) return;
             
            const newTodoInfo = createTodoItem(todoList, todoText);
            updateTodoList(newTodoInfo);
            setTodoText("");
        }

        const handleTodoItemSave = useCallback((e) => {
            e.preventDefault();
            createTodoInfo(todoList, todoText);
        },[todoText]);

        const isCompletedTodoList = (selectedId) => todoInfo => {
            if(todoInfo.id === selectedId)
                todoInfo.isCompleted = !todoInfo.isCompleted
            return todoInfo;
        }
    
        const onTodoItemClick = useCallback((selectedId) => {
            const newTodoList = _map(todoList, isCompletedTodoList(selectedId));
            saveTodoList(newTodoList);
        },[todoList])

    return {todoText, handleTodoTextChange, handleTodoItemSave, onTodoItemClick}
}

export default useTodoSetup;