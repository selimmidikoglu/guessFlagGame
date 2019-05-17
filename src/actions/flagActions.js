export const getCorrectAnswer =  () => {
    return  {
        type: "MATCH",
    }
}

export const getWrongAnswer =  () => {
    return  {
        type: "NOT_MATCH",
    }
}

export const getRandomFlags =  () => {
    return  {
        type: "GET_FLAGS",
    }
}