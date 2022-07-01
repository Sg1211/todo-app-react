export const createTodoItem = (todoList, todoText) => {
    const newTodoInfo = {};
    newTodoInfo.id = todoList.length + 1;
    newTodoInfo.text = todoText;
    newTodoInfo.isCompleted = false;
    return newTodoInfo;
}