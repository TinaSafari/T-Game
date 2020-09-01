import React, {Component} from "react";
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        const {user, authUser} = this.props
        return (
            <div className='nav-box'>
                <div className='inner-box'>
                    {authUser ? (
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="nav-item green">
                                <Link to="/add">Add new question</Link>
                            </li>
                            <li className="nav-item split">
                                <Link to="/leaderboard">Leaderboard</Link>
                            </li>
                            <li className="nav-item">{user ? user.name : null}</li>
                            <li className="nav-item log-out">
                                <Link to="/">
                                    <button className="log-out-button">Log Out</button>
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className="nav-list">
                            <li className="nav-item">Log in to ask a question</li>
                        </ul>
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { users, authUser } = state
    const user = users[authUser]
    return {
        user,
        authUser
    }
}

export default connect(mapStateToProps)(Navbar)
