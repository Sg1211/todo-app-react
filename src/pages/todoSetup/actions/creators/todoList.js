import { createAction } from 'redux-actions';

// Action types
import { TODO_LIST_ACTION_TYPES } from '../../reducers';

export const createSaveTodoListAction = createAction(TODO_LIST_ACTION_TYPES.SAVE_TODO_LIST);

export const createSaveIsTodoListLoadingAction = createAction(TODO_LIST_ACTION_TYPES.SET_IS_TODO_LIST_LOADING);
