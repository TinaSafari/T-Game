export const SET_AUTH_USER = 'SET_AUTH_USER'
export const LOG_OUT = "LOG_OUT"

export function setAuthUser(id) {
    return {
        type: SET_AUTH_USER,
        id
    }
}

export function logOut(id) {
    return {
        type: LOG_OUT,
        id
    }
}