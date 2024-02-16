import { ActionsTypes } from "../actionTypes/acttionTypes"

export const addTodo = (payload) => ({
    type: ActionsTypes.ADD_TODO,
    payload,
})

export const deleteTodo = (payload) => ({
    type: ActionsTypes.DELETE,
    payload,
})

export const updateTodo = (payload) => ({
    type: ActionsTypes.UPDATE,
    payload,
})

