export default flagReducer = (state = {
    flagNumber : 3
}, action) => {
    switch(action.type) {
        case "INC":
            return state.flagNumber + 1;
        case "DEC":
            return state.flagNumber - 1;
        default :
            return state;
    }
};