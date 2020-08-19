import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from "../Actions/shared";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from "./Dashboard";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <div>
                    <Route/>
                    <div className='App'>

                    </div>
                    {this.props.loading === true
                        ? null
                        : <Dashboard />}
                </div>
            </Router>

        )
    }
}

function mapStateToProps({ authUser }) {
    return {
        loggedIn: authUser !== null,
    };
}

export default connect(mapStateToProps)(App);
