import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from "../Actions/shared";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import {LoadingBar} from 'react-redux-loading-bar'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <div>
                    <LoadingBar/>
                    <Route/>
                    <div className='App'>


                    </div>
                    {this.props.loading === true
                        ? null
                        : <Dashboard />
                    }
                </div>
            </Router>

        )
    }
}

function mapStateToProps({ LoadingBar }) {
    return {
        loading: false
    };
}

export default connect(mapStateToProps)(App);
