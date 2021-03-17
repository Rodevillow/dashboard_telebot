// CONSTANTS

export const AUTH_SET_TEST = 'AUTH_SET_TEST'


// SYNC ACTIONS

export const setTest = (isTrue) => ({
    type: AUTH_SET_TEST,
    payload: isTrue
})

// ASYNC ACTIONS THUNK

export const asyncTest = (some_field) => async (dispatch) => {
    // ...await something async
    // dispatch(setTest(true))
}