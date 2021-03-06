import React, {Component} from "react";
import {connect} from 'react-redux'

class Leaderboard extends Component {
    render() {
        const {users} = this.props
        const userArray = Object.keys(users).map((key) => users[key]);
        const sortedUserArray = userArray.sort((a, b) => {
            const sumA = Object.keys(a.answers).length + a.questions.length;
            const sumB = Object.keys(b.answers).length + b.questions.length;
            return sumB -sumA;
        })

        return (
            <div>
                <h3 className='center'>Leaderboard</h3>
                <ul className='user-list'>
                    {sortedUserArray.map((user) => (
                        <li key={user.id}>
                            <div className='user'>
                                <img
                                    className='avatar'
                                    src={user.avatarURL}
                                    alt={`Avatar of ${user.name}`}
                                />
                                <span>{user.name}</span>
                                <div className='user-stats'>
                                    <p>Asked: {user.questions.length}</p>
                                    <p>Answered: {Object.keys(user.answers).length}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users}){

    return{
        users
    }
}


export default connect(mapStateToProps)(Leaderboard)

