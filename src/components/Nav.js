import React, {Component, Fragment} from 'react'
import LoadingBar from 'react-redux-loading-bar'
import {NavLink, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from "../Actions/authUser";
import * as ReactBootstrap from 'react-bootstrap';

class Nav extends Component {
    state = {
        redirectLogin: false
    }


    handleLogout = (e) => {
        e.preventDefault()
        this.props.dispatch(logOut())
        this.setState(() => ({
            redirectLogin: true
        }))
    }

    render() {

        const {redirectLogin} = this.state

        if (redirectLogin === true) {
            return (<Redirect to="/login"/>)
        }

        return (
            <Fragment>
                <ReactBootstrap.Navbar bg="light" expand="lg">
                    <ReactBootstrap.Navbar.Brand href="#home">Would You Rather...?</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                        <ReactBootstrap.Nav className="mr-auto">
                            <ReactBootstrap.Nav.Link as={NavLink} to='/' exact>Home</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link as={NavLink}
                                                     to="/leaderboard" exact>Leaderboard</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link as={NavLink}
                                                     to="/question" exact>Question</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link as={NavLink}
                                                     to="/add" exact>NewQuestion</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.NavDropdown.Item as={NavLink} to="#"
                                                             onClick={this.handleLogout}>logout</ReactBootstrap.NavDropdown.Item>

                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Navbar>
                <LoadingBar/>
            </Fragment>
        )
    }
}

function mapStateToProps({authUser, users}) {
    return {
        user: users[authUser]
    }
}

export default connect(mapStateToProps)(Nav)
