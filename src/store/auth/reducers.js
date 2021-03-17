import {
    AUTH_SET_TEST,
} from "./actions";

const defaultState = {
    isTrue: false,
};

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_SET_TEST:
            return {
                ...state,
                isTrue: action.payload,
            };
        default:
            return state;
    }
};
