import React,{ Component} from "react";
import {connect} from 'react-redux'
import { Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Navbar extends Component{
    render() {
        // const {users, authUser} =this.props
        return(
            <div className='nav-box'>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">New Poll</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Leader Board</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Log-in</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

function mapStateToProps({users, authUser}){
        return{
            authUser,
            users
        }
}
export default connect(mapStateToProps)(Navbar)