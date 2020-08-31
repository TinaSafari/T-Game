import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from "../Actions/shared";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from "./Dashboard";
import {LoadingBar} from 'react-redux-loading-bar'
import NewQuestion from "./NewQuestion";
import Navbar from "./Navbar";
import Login from "./login";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    <div className='container'>
                        <Navbar/>
                        {this.props.loading === true
                            ? null
                            : (<div>
                                <Route path='/' exact component={Dashboard}/>
                                <Route path='/' exact component={Login}/>
                                <Route path='/' exact component={NewQuestion}/>
                            </div>

                            )}
                    </div>
                </Fragment>
            </Router>

        )
    }
}

function mapStateToProps({authUser}) {
    return {
        loading: authUser === null
    };
}

export default connect(mapStateToProps)(App);
