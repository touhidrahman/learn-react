export const initialState = {
    basket: [],
    user: null,
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_USER':
            return {...state, user: action.user}
        case 'ADD_TO_BASKET':
            return {...state, basket: [...state.basket, action.item]}
        case 'REMOVE_FROM_BASKET':
            break;
        default:
            return state;
    }
}

export default reducer