import React,{Component} from "react";
import {connect} from 'react-redux'
import {setAuthUser} from "../Actions/authUser";

class Login extends Component{
    componentDidMount() {
        this.props.dispatch(setAuthUser(false))
    }
    render() {
        const {usersIds,location} = this.props
        return(
            <div className='vote-container'>
                <h3>Please SignIn</h3>
                {usersIds.map(id =>(
                    <div key={id}>
                        <user id={id} location={location}/>
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