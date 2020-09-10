import React, {Component} from "react";
import {connect} from 'react-redux'
import {handleAddQuestion} from '../Actions/questions'
import {Redirect} from 'react-router-dom'


class NewQuestion extends Component {
    state = {
        redirectHome: false,
        optionOne: '',
        optionTwo: ''
    }
    handleChange = (e) => {
        const {value, id} = e.target
        this.setState(() => ({[id]: value}))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {optionOne, optionTwo} = this.state
        const {dispatch} = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toDashboard: true
        }))
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
                        Submit
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