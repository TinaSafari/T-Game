import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from './_DATA';

export function getInitialData() {
    return Promise.all([_getUsers(), _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function saveQuestion(info) {
    return _saveQuestion(info);
}

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info);
}

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100) // fake async
    },
    logout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100) // fake async
    }
}



