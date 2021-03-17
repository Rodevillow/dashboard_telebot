// CONSTANTS

export const REGISTRATION_SET_TEST = 'REGISTRATION_SET_TEST'

// SYNC ACTIONS

export const setRegistrationTest = (isTtue) => ({
    type: REGISTRATION_SET_TEST,
    payload: isTtue
})

// ASYNC ACTIONS THUNK

// ... some async funcns