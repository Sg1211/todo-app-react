import { compose } from 'recompose';

// Action Creators
import {
  createSaveTodoListAction,
  createSaveIsTodoListLoadingAction,
} from './creators/todoList';

// Utils
import fetchTodoListData from '../utils/fetchTodoListData';

// Constants
import MOCK_TODO_LIST from '../constants/mockTodoList';

// Helpers
import {getUpdatedTodoList} from './todoList.helpers';

const saveTodoListInStore = (todoList, dispatch) => {
  compose(dispatch, createSaveTodoListAction)({ todoList });
};

const fetchTodoList = () => async dispatch => {
  compose(dispatch, createSaveIsTodoListLoadingAction)({ isTodoListLoading: true });

  try {
    const todoList = await fetchTodoListData(MOCK_TODO_LIST, 2000);
    saveTodoListInStore(todoList, dispatch);
  } catch (error) {
    saveTodoListInStore([], dispatch);
  } finally {
    compose(dispatch, createSaveIsTodoListLoadingAction)({ isTodoListLoading: false });
  }
};

const updateTodoList = (todoInfo) => (dispatch, getState) => {
    const updatedTodoList = getUpdatedTodoList(todoInfo, getState)
    saveTodoListInStore(updatedTodoList, dispatch);
}

const saveTodoList = (todoList) => (dispatch) => {
  saveTodoListInStore(todoList, dispatch);
}

export { fetchTodoList, updateTodoList, saveTodoList };
