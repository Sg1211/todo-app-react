import React from 'react';
import PropTypes from 'prop-types';

// Lodash
import _noop from 'lodash/noop';
import _map from 'lodash/map';

// Constants
import { EMPTY_ARRAY } from '../../../../constants/todo.general'
import TodoItem from './atoms/todoItem';

// Styles
import "./TodoList.css"

const TodoList = ({todoList, onTodoItemClick}) => {

    const getTodoItem = (todoInfo, index) => {
        return (
            <TodoItem
                key={index}
                todoInfo={todoInfo}
                onTodoItemClick={onTodoItemClick}
            />
        )
    }

    const renderTodoList = (todoList) => {
     const listToDisplay =  _map(todoList, getTodoItem)
     return listToDisplay;
    }
  
    return (
      <>
        {renderTodoList(todoList)}
     </>
    )
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoItemClick: PropTypes.func
};
  
TodoList.defaultProps = {
    todoList: EMPTY_ARRAY,
    onTodoItemClick: _noop
};

export default TodoList;