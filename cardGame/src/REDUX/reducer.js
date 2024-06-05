

const initState = {
    player: {
        userId: 123,
        deckId: 531,
        hand: [],
        deck: [],
    },
    opponent: {
        userId: 623,
        deckId: 627,
        hand: [],
        deck: [],
    },
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        default: return state
    }
}

export default rootReducer