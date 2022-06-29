import React from 'react';
import PropTypes from 'prop-types';

// Lodash
import _noop from 'lodash/noop';

// Constants
import { EMPTY_ARRAY } from '../../../../constants/todo.general'
import TodoItem from '../todoItem';

// Styles
import "./TodoList.css"

const TodoList = ({todoList, onTodoClick}) => {
  
    return (
      <>
        {
            todoList.map((todoInfo , index)=>{
                return (
                    <TodoItem
                        key={index}
                        todoInfo={todoInfo}
                        onTodoClick={onTodoClick}
                    />
                )
            })
        }
     </>
    )
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};
  
TodoList.defaultProps = {
    todoList: EMPTY_ARRAY,
    onTodoClick: _noop
};

export default TodoList;