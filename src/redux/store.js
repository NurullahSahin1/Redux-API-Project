import { createStore } from "redux";
import { combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";



const rootReducer = combineReducers({
    todoReducer, userReducer
})
const store = createStore(rootReducer);

export default store;