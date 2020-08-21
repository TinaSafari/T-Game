import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {

    render() {

        return (
            <div>
                <h3 className='center'>Dashboard</h3>
                <div className='btn-group'>
                    <button>
                        Unanswered
                    </button>
                    <button>
                        Answered
                    </button>
                </div>
                <ul className='question-list'>

                </ul>
            </div>
        );
    }
}

function mapStateToProps({ authUser, questions, users }) {
    return {
        authUser,
        questions,
        users,
    };
}

export default connect(mapStateToProps)(Dashboard)