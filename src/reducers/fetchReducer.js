export const fetchReducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return state;
        case "FETCH_SUCCESS":
            return {...state, flats: action.payload};
        default:
            return state;
    }
};
