import React from 'react';
import { connect } from 'react-redux';

// Components
import TodoForm from '../../molecules/todoForm';
import TodoList from '../../molecules/todoList';
import Header from '../../atoms/header';

// Hooks
import useFetchData from './hooks/useFetchData';
import useTodoSetup from './hooks/useTodoSetup';

// Actions
import { fetchTodoList as fetchTodoListAction } from './actions/todoList';
import { addTodoList as addTodoListAction } from './actions/todoList';

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
    const {todoText, onInputChange, onFormSubmit, onTodoClick} = useTodoSetup(todoList, addTodoList);


    const renderTodoForm = () => {
        return (
            <TodoForm
                btnText="add-todo"
                btnType="submit"
                inputType="text"
                inputValue={todoText}
                onInputChange={onInputChange}
                onFormSubmit={onFormSubmit}
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

const mapStateToProps = state => ({
    todoList: state.todoList,
    isTodoListLoading: state.isTodoListLoading
  });
  
const mapDispatchToProps = {
    fetchTodoList: fetchTodoListAction,
    addTodoList: addTodoListAction,
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoSetup);
