import {getInitialData} from "../utils/api";
import {showLoading, hideLoading} from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}
export function handleAddQuestion(question){
    return{
        type: ADD_QUESTION,
        question
    }
}

export function addQuestionAnswer(authUser, questionId, selectedOption){
    return{
        type: ADD_QUESTION_ANSWER,
        authUser,
        questionId,
        selectedOption
    }
}
export function handleGetQuestions(){
    return(dispatch) => {
        dispatch(showLoading());
        getInitialData().then((questions) => {
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}