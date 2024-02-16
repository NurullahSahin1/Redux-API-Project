import { ActionsTypes } from "../actionTypes/acttionTypes";

const initialState = {
    isAdmin: false,
    userInfo: {},


}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.ADD_TODO:
            return state;
        case ActionsTypes.DELETE:
            return state;

        default:
            return state;
    }
};

export default userReducer;