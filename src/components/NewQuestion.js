import React, {Component} from "react";
import {connect} from 'react-redux'

class NewQuestion extends Component {
    state = {
        redirectHome: false,
        optionOne: '',
        optionTwo: ''
    }
    handleChange = (e) => {
        const question = e.target.value

        this.setState(() => ({
            question
        }))
    }
    handleSubmit = (e) => {
        e.preventDefult()

        const {redirectHome, optionOne, optionTwo} = this.state

        this.setState(() => ({
            redirectHome: false,
            optionOne: '',
            optionTwo: ''
        }))
    }

    render() {
        const {redirectHome, optionOne, optionTwo} = this.state
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