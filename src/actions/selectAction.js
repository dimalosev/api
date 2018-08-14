export function getSelectValue(val, flats) {
    return {
        type: "SELECT_VALUE",
        value: val,
        flats
    }
}

export function choiceTypeApartment(val, flats) {
    return {
        type: "TYPE_APARTAMENT",
        payload: val,
        flats
    }
}
