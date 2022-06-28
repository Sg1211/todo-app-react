import { handleActions } from 'redux-actions';
import produce from 'immer';

// Constants
import { EMPTY_ARRAY } from '../../../constants/todo.general';
import ACTION_TYPES from './actionTypes/todoList.ActionTypes';

const INITIAL_STATE = {
  todoList: EMPTY_ARRAY,
  isTodoListLoading: true,
};

const saveTodoList = produce((state, action) => {
  const { payload = EMPTY_ARRAY } = action;
  state.todoList = payload.todoList;
});

const setIsTodoListLoading = produce((state, action) => {
  const { payload = EMPTY_ARRAY } = action;
  state.isTodoListLoading = payload.isTodoListLoading;
});

const ACTION_HANDLERS = {
  [ACTION_TYPES.SAVE_TODO_LIST]: saveTodoList,
  [ACTION_TYPES.SET_IS_TODO_LIST_LOADING]: setIsTodoListLoading,
};

export default handleActions(ACTION_HANDLERS, INITIAL_STATE);