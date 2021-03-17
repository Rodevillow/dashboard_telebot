import { combineReducers } from 'redux';

import { authReducer } from './auth/reducers';
import { registrationReducer } from './registration/reducers';
import { homeReducer } from './home/reducers';
import { dashboardReducer } from './dashboard/reducers';

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    home: homeReducer,
    dashboard: dashboardReducer
})