import React, {Component, Fragment} from 'react'
import LoadingBar from 'react-redux-loading-bar'
import {NavLink ,Redirect} from 'react-router-dom'
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
                {/*<Navbar color="light" light expand="md">*/}
                {/*    <NavbarBrand>Would You Rather...?</NavbarBrand>*/}
                {/*    <BoostrapNav>*/}
                {/*        <NavItem>*/}
                {/*            <BootstrapNavLink tag={NavLink} exact to="/">Dashboard</BootstrapNavLink>*/}
                {/*        </NavItem>*/}
                {/*        <NavItem>*/}
                {/*            <BootstrapNavLink tag={NavLink}*/}
                {/*                              to="/leaderboard">Leaderboard</BootstrapNavLink>*/}
                {/*        </NavItem>*/}
                {/*        <NavItem>*/}
                {/*            <BootstrapNavLink tag={NavLink} to="/add">Add*/}
                {/*                Question</BootstrapNavLink>*/}
                {/*        </NavItem>*/}
                {/*        <NavItem>*/}
                {/*            <BootstrapNavLink tag={NavLink} to="#"*/}
                {/*                              onClick={this.handleLogout}>logout</BootstrapNavLink>*/}
                {/*        </NavItem>*/}
                {/*    </BoostrapNav>*/}
                {/*</Navbar>*/}
                <ReactBootstrap.Navbar bg="light" expand="lg">
                    <ReactBootstrap.Navbar.Brand href="#home">Would You Rather...?</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                        <ReactBootstrap.Nav className="mr-auto">
                            <ReactBootstrap.Nav.Link  to='/' exact activeClassName='active'
                                                      >Dashboard</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="/leaderboard" tag={NavLink} to="/leaderboard">Leaderboard</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="/question" tag={NavLink} to="/add">Question</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.NavDropdown.Item href="logout" tag={NavLink} to="#"
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
