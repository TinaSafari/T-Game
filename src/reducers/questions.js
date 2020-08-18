import {RECEIVE_QUESTIONS} from "../Actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...action,
                ...action.questions
            }
        default :
            return state
    }
}