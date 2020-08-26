import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {
        const {question, user, question_id} = this.props

        return
    }
}

function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id]
    const question_id = question.id
    const user = users[question.author]

    return {
        question,
        question_id,
        user
    }
}

export default connect(mapStateToProps)(Question)