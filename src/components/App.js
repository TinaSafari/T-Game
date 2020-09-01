import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from "../Actions/shared";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Navbar from "./Navbar";
import Login from "./login";
import Question from "./Question";
import Leaderboard from "./Leaderboard";
import PageNotFound from "./NotFound";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        const { loggedIn } = this.props;

        return (
            <Router>
                <Fragment>
                    <div className='container'>
                        <Navbar />
                        <div>
                            <Switch>
                                <Route path='/' exact component={Dashboard} loggedIn={loggedIn} />
                                <Route path='/leaderboard' exact component={Leaderboard} loggedIn={loggedIn} />
                                <Route path='/add' exact component={NewQuestion} loggedIn={loggedIn} />
                                <Route path='/questions/:id' exact component={Question} loggedIn={loggedIn} />
                                <Route path='/login' exact component={Login} />
                                <Route component={PageNotFound} />
                            </Switch>
                        </div>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({ authUser }) {
    return {
        loggedIn: authUser !== null,
    };
}

export default connect(mapStateToProps)(App);