import { DASHBOARD_TEST } from './actions';

const defaultState = {
    someData: []
}

export const dashboardReducer = (state = defaultState, action) => {

    switch(action.type) {
        case DASHBOARD_TEST:
            return {
                ...state,
                someData: action.payload
            }
        default:
            return state;
    }

}