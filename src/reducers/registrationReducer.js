import {authentication} from "../actions/registrationAction";

const initialState = {
    authentication: true,
    username: 'losev'
};

export const registrationReducer = (store = initialState, action) => {
    switch (action.type) {
        case "REGISTRATION_DATA":
            return {...store, username: action.payload};
        case "AUTHENTICATION":
            return {...store, authentication: action.payload};
        case "LOG_OUT":
            return {...store, authentication: false};
        default:
            return store;
    }
};
