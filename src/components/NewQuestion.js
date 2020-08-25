import React, {Component} from "react";
import {connect} from 'react-redux'
import {handleAddQuestion} from '../Actions/questions'

class NewQuestion extends Component {
    state = {
        redirectHome: false,
        optionOneText: '',
        optionTwoText: ''
    }
    render() {
        return
    }
}

function mapStateToProps({authUser}){
    return{
        authUser
    }
}

export default connect(mapStateToProps)(NewQuestion)