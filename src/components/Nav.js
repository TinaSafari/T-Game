import React, {Component, Fragment} from 'react'
import LoadingBar from 'react-redux-loading-bar'
import {NavLink, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Nav as BoostrapNav, Navbar, NavbarBrand, NavItem, NavLink as BootstrapNavLink} from 'reactstrap'
import {logOut} from "../Actions/authUser";

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
                <Navbar color="light" light expand="md">
                    <NavbarBrand>Would You Rather...?</NavbarBrand>
                    <BoostrapNav>
                        <NavItem>
                            <BootstrapNavLink tag={NavLink} exact to="/">Dashboard</BootstrapNavLink>
                        </NavItem>
                        <NavItem>
                            <BootstrapNavLink tag={NavLink}
                                              to="/leaderboard">Leaderboard</BootstrapNavLink>
                        </NavItem>
                        <NavItem>
                            <BootstrapNavLink tag={NavLink} to="/add">Add
                                Question</BootstrapNavLink>
                        </NavItem>
                        <NavItem>
                            <BootstrapNavLink tag={NavLink} to="#"
                                              onClick={this.handleLogout}>logout</BootstrapNavLink>
                        </NavItem>
                    </BoostrapNav>
                </Navbar>
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
