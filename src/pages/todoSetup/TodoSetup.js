import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Lodash
import _noop from 'lodash/noop';

// Components
import TodoForm from './molecules/todoForm';
import TodoList from './molecules/todoList';
import Header from '../../atoms/header';

// Hooks
import useFetchData from './hooks/useFetchData';
import useTodoSetup from './hooks/useTodoSetup';

// Actions
import { fetchTodoList as fetchTodoListAction } from './actions/todoList';
import { addTodoList as addTodoListAction } from './actions/todoList';

// Constants
import { EMPTY_ARRAY } from '../../constants/todo.general';

// Styles
import "./TodoSetup.css"


const TodoSetup = props => {
    const {
        todoList,
        isTodoListLoading,
        fetchTodoList,
        addTodoList
      } = props;

    useFetchData(fetchTodoList);
    const {todoText, handleTodoTextChange, handleTodoItemSave, onTodoClick} = useTodoSetup(todoList, addTodoList);

    const renderTodoForm = () => {
        return (
            <TodoForm
                btnText="add-todo"
                btnType="submit"
                inputType="text"
                todoText={todoText}
                handleTodoTextChange={handleTodoTextChange}
                handleTodoItemSave={handleTodoItemSave}
            />
        )
    }

    const renderTodoList = () => {
        if(isTodoListLoading) return;
        return (
            <TodoList
                todoList={todoList}
                onTodoClick={onTodoClick}
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

TodoSetup.propTypes = {
    todoList: PropTypes.array,
    isTodoListLoading: PropTypes.bool,
    fetchTodoList: PropTypes.func,
    addTodoList: PropTypes.func,
  };
  
TodoSetup.defaultProps = {
    todoList: EMPTY_ARRAY,
    isTodoListLoading: true,
    fetchTodoList: _noop,
    addTodoList: _noop,
  };

const mapStateToProps = state => ({
    todoList: state.todoList,
    isTodoListLoading: state.isTodoListLoading
  });
  
const mapDispatchToProps = {
    fetchTodoList: fetchTodoListAction,
    addTodoList: addTodoListAction,
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoSetup);
