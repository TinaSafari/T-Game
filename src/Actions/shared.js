import {getInitialData} from "../utils/api";
import {receiveQuestions} from "./questions";
import {receiveUsers} from "./users";
import {setAuthUser} from "./authUser";

const AUTHED_ID = 'sarahedo'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(setAuthUser(AUTHED_ID))
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
            })
    };
}