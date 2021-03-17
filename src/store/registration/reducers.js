import { 
    REGISTRATION_SET_TEST,
} from "./actions";

const defaultState = {
    isTrue: false,
}

export const registrationReducer = (state = defaultState, action) => {

    switch (action.type) {
        case REGISTRATION_SET_TEST:
            return {
                ...state,
                isTrue: action.payload
            }
        default:
            return state;
    }
}