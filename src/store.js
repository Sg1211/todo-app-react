import thunk from "redux-thunk" 
import { createStore, applyMiddleware } from "redux";

// Reducer
import TodoListReducer from "./pages/todoSetup/reducers";

const store = createStore(TodoListReducer, applyMiddleware(thunk));

export default store;