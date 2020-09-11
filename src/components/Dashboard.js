import React, {Component} from 'react';
import {connect} from 'react-redux';
import Question from "./Question";
import questions from "../reducers/questions";

class Dashboard extends Component {
    state = {
        'qToShow': 'unanswered',
        'activeTab': 'unanswered'
    }

    handleClickChange = (e, click) => {
        this.setState(() => ({
            qToShow: click,
            activeClick: click
        }))
    }

    render() {
        const {qToShow, activeClick} = this.state;

        return (
            <div>
                <div className='projectContainer'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-8'>
                                <div className='center'>
                                    <button type='button'
                                            className={"btn btn-info " + (activeClick === 'unanswered' ? 'active' : null)}
                                            onClick={(e) => this.handleClickChange(e, 'unanswered')}>Unanswered
                                        Questions
                                    </button>
                                    <button type='button'
                                            className={"btn btn-info " + (activeClick === 'answered' ? 'active' : null)}
                                            onClick={(e) => this.handleClickChange(e, 'answered')}>Answered
                                        Questions
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='col-sm-8'>
                                {questions.id.map((id) => {
                                    return (
                                        <Question key={id} id={id}
                                                  qToShow={qToShow}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authUser, questions, users}) {
    return {
        authUser,
        questions,
        users,
    };
}

export default connect(mapStateToProps)(Dashboard)