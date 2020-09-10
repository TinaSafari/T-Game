import React, {Component} from "react";
import {connect} from 'react-redux'
import {setAuthUser} from "../Actions/authUser";
import User from "./User";

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(setAuthUser(false))
    }

    render() {
        const {userIds, location} = this.props
        return (
            <div className="vote-container">
                <h2 className='center'>Login</h2>
                {userIds.map(id => (
                    <div key={id}>
                        <User id={id} location={location}/>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const users = state.users
    return {
        usersId: Object.keys(users),
        users
    }
}

export default connect(mapStateToProps)(Login)