import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from "../Actions/shared";
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <div>
                    <Route/>
                    Starter Code
                </div>
            </Router>

        )
    }
}

export default connect()(App)
