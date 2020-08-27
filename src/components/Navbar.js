import React, {Component} from "react";
import {connect} from 'react-redux'
import {Nav} from 'react-bootstrap';

class Navbar extends Component {
    render() {
        const {users, authUser} = this.props
        // const {name, avatarURL} = users[authUser]
        return (
            <div className='nav-box'>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#new-question ">New Question</Nav.Link>
                            <Nav.Link href="#leader-board">Leader Board</Nav.Link>
                            <Nav.Link href="#log-out">Log Out</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

function mapStateToProps({users, authUser}) {
    return {
        authUser,
        users
    }
}

export default connect(mapStateToProps)(Navbar)