import {saveQuestion, saveQuestionAnswer} from "../utils/api";
import {handleInitialData} from './shared'
import {hideLoading, showLoading} from "react-redux-loading-bar";


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function handleSaveQuestionAnswer(answerObj) {
    return dispatch => {
        dispatch(showLoading())

        return saveQuestionAnswer({
            ...answerObj
        })
            .then(() => dispatch(handleInitialData(answerObj.authUser)))
            .then(() => dispatch(hideLoading()))
    }
}

export function handleSaveQuestion(info) {
    console.log('questionObj: ', info)
    return dispatch => {
        dispatch(showLoading())

        return saveQuestion({
            ...info,
            author: info.authUser
        })
            .then(res => dispatch(handleInitialData(res.author)))
            .then(() => console.log('plonk'))
            .then(() => dispatch(hideLoading()))
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

