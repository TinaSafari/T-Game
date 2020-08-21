import React, {Component} from "react";
import {connect} from 'react-redux'

class Leaderboard extends Component {
    render() {
        const {users, leaderboardPlacements} = this.props
        console.log(leaderboardPlacements)

        return (
            <div>
                <h3 className='center'>LeaderBoard</h3>
                <ul className='users-list'></ul>
                <div key={users.id}>
                </div>
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

