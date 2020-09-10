import React, {Component} from "react";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {fakeAuth} from "../utils/api";

class User extends Component {
    state = {
        redirectToUser: false
    }

    handleLogin = id => {
        fakeAuth.authenticate(() => {
            this.props.setAuthUser(id)
            this.setState({ redirectToReferrer: true })
        })
    }

    render() {
        const {from} = this.props.location.state || {
            from: {pathname: '/home'}
        }
        const {redirectToUser} = this.state
        const {user, users} = this.props

        if (redirectToUser === true) {
            return <Redirect to={from}/>
        }
        return (
            <div className='user'>
                <div key={user.id}>
                    <img
                        className='avatar'
                        src={users[user.id].avatarURL}
                        alt={`Avatar of ${users[user.id].avatarURL}`}
                    />
                    <h3 className="author">{`${users[user.id].name}`}</h3>
                    <button
                        className="loginButton"
                        onClick={() => this.handleLogin(user.id)}>
                        Log in
                    </button>

                </div>
            </div>
        )
    }
}

function mapStateToProps({authUser, users}, {id}) {
    const user = users[id]
    return {
        user,
        users
    }
}

export default connect(mapStateToProps)(User)

