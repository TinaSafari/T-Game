import React, {Component} from "react";
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../Actions/questions'
import {Redirect} from 'react-router-dom'


class NewQuestion extends Component {
    state = {
        redirectHome: false,
        optionOne: '',
        optionTwo: ''
    }
    handleChange = (e) => {
        const text = e.target.value
        const name = e.target.name

        this.setState(() => ({
            [name]: text
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {optionOne, optionTwo} = this.state
        const {dispatch, authUser} = this.props

        dispatch(
            handleSaveQuestion({optionOne, optionTwo, authUser})
        ).then(() =>
            this.setState(() => ({
                redirectHome: true
            }))
        )
    }

    render() {
        const {redirectHome, optionOne, optionTwo} = this.state
        if (redirectHome) {
            return <Redirect to={`/home`}/>
        }
        return (
            <div>
                <h3 className='center'>Creat New Question</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <span>
                        Would You Rather...
                    </span>
                    <input
                        className='form-control'
                        placeholder='Enter option one text here...'
                        value={optionOne}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        className='form-control'
                        placeholder='Enter option two text here...'
                        value={optionTwo}
                        onChange={this.handleChange}/>
                    <br/>
                    <button type='submit'>
                        Ask Your Question
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({authUser}) {
    return {
        authUser
    }
}

export default connect(mapStateToProps)(NewQuestion)