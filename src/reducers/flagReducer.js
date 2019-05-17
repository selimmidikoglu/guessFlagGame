import flags from '../../assets/images/flags';


export default flagReducer = (state = {
    indexes: [],
    flags : flags,
    correctAnswers: 0,
    wrongAnswers: 0,
    flagCount: 3
}, action) => {
    switch(action.type) {
        case "EMPTY_FLAGS":
            
            return state;
        case "MATCH":
            state.indexes = [];
            return {...state,correctAnswers : state.correctAnswers + 1};
        case "NOT_MATCH":
            return state.wrongAnswers + 1;
        case "GET_FLAGS":
            for (let i = 0; i < state.flagCount; i++) {
                var randomIndex = Math.random()*state.flags.length;
                randomIndex = Math.floor(randomIndex);
                state.indexes.push(flags[randomIndex]);
                console.log(state.indexes);    
            } 
            return state;
        default :
            return state;
    }
};