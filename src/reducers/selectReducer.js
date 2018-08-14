export const selectReducer = (state = {}, action) => {
    switch (action.type) {
        case "SELECT_VALUE":
            return {...state, sortArray : action.flats.filter(item => {
                    if (item.bedroom_number == action.value) {
                        return item
                    } else if (action.value === "all") {
                        return {...state, sortArray: action.flats}
                    }})};
        case "TYPE_APARTAMENT":
            return {...state, sortArray: action.flats.filter(item => {
                    if(item.property_type == action.payload) {
                        return item
                    }})};
        default:
            return state;
    }
};
