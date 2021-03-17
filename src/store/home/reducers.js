import { HOME_TEST } from './actions';

const defaultState = {
    someData: []
}

export const homeReducer = (state = defaultState, action) => {

    switch(action.type) {
        case HOME_TEST:
            return {
                ...state,
                someData: action.payload
            }
        default:
            return state;
    }

}