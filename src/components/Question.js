import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/_DATA'
import {Link} from "react-router-dom";

class Question extends Component {
    render() {
        const {question, user, question_id} = this.props

        return (
            <div className='question'>
                <div className='title-question'>
                    <img src={users.avatarURL} alt='avatar' className='avatar'/>
                    <h3>
                        {user.name}<small>{formatQuestion(question.timestamp)}</small>
                    </h3>
                </div>
                <div className='question-body'>
                    <h4>Would you rather</h4>
                    <p>A: {question.optionOne.text}</p>
                    <p>B: {question.optionTwo.text}</p>
                </div>
                <div className='question-footer'>
                    <Link to={`/question/${question_id}`}>
                        <button className='vote-button'>Vote Here!</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users}, {id}) {
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