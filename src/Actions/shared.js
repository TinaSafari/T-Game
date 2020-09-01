import {getInitialData} from "../utils/api";
import {receiveQuestions} from "./questions";
import {receiveUsers} from "./users";
import {setAuthUser} from "./authUser";
import {showLoading, hideLoading} from "react-redux-loading-bar";

const AUTHED_ID = 'userId ? userId : null'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(setAuthUser(AUTHED_ID))
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
                dispatch(hideLoading())
            })
    };
}