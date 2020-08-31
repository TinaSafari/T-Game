import React,{Component} from "react";
import {connect} from 'react-redux'
import {setAuthUser} from "../Actions/authUser";

class Login extends Component{
    componentWillMount() {
        this.props.dispatch(setAuthUser(false))
    }
    render() {
        const {usersId,location} = this.props
        return(
            <div className='vote-box'>
                <h2>Please Sign-In</h2>
                {usersId.map(id =>(
                    <div key={id}>
                        <users id={id} location={location}/>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state){
    const users = state.users
    return{
        usersId: Object.keys(users),
        users
    }
}

export default connect(mapStateToProps)(Login)