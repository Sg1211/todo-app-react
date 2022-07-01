export const getUpdatedTodoList = (todoInfo, getState) => {
    const initialTodoList = getState().todoList;
    const updateTodoList = [...initialTodoList, todoInfo];
    return updateTodoList;
  }