import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Lodash
import _noop from 'lodash/noop';
import _isEmpty from 'lodash/isEmpty';

// Components
import TodoForm from './molecules/todoForm';
import TodoList from './molecules/todoList';
import Header from '../../atoms/header';
import Loader from '../../atoms/loader';
import NoTodos from '../../pages/todoSetup/molecules/todoList/atoms/noTodos';


// Hooks
import useFetchTodoList from './hooks/useFetchTodoList';
import useTodoSetup from './hooks/useTodoSetup';

// Actions
import { fetchTodoList as fetchTodoListAction } from './actions/todoList';
import { updateTodoList as updateTodoListAction } from './actions/todoList';
import { saveTodoList as saveTodoListAction } from './actions/todoList';

// Constants
import { EMPTY_ARRAY } from '../../constants/todo.general';

// Styles
import "./TodoSetup.css"


const TodoSetup = props => {
    const {
        todoList,
        isTodoListLoading,
        fetchTodoList,
        updateTodoList,
        saveTodoList
      } = props;

    useFetchTodoList(fetchTodoList);
    const {todoText, handleTodoTextChange, handleTodoItemSave, onTodoItemClick} = useTodoSetup(todoList, updateTodoList, saveTodoList);

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
        if(isTodoListLoading) 
        return(<Loader loadingText="List is loading..."/>);

        if(_isEmpty(todoList))
        return (<NoTodos errorText="No todos found"/>)

        return (
            <TodoList
                todoList={todoList}
                onTodoItemClick={onTodoItemClick}
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
    updateTodoList: PropTypes.func,
  };
  
TodoSetup.defaultProps = {
    todoList: EMPTY_ARRAY,
    isTodoListLoading: true,
    fetchTodoList: _noop,
    updateTodoList: _noop,
    saveTodoList: _noop
  };

const mapStateToProps = state => ({
    todoList: state.todoList,
    isTodoListLoading: state.isTodoListLoading
  });
  
const mapDispatchToProps = {
    fetchTodoList: fetchTodoListAction,
    updateTodoList: updateTodoListAction,
    saveTodoList: saveTodoListAction
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoSetup);
