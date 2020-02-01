import React from 'react';
import Logo from './logo.jpg'
import { FaShoppingCart } from 'react-icons/fa';
import { Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'





const NavBar = () => {

    return (
        <div className='row'>
            <Navbar bg="light" expand="lg" className="navbar navbar-expand-md navbar-light fixed-top py-4"
                id="main-nav">
                <Navbar.Brand href="#home" className='navbar-brand'><img
                    src={Logo}

                    className="d-inline-block align-top"
                    alt="React Bootstrap logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#link" >About Us</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Rims</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Tires</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Lifts and Level Kits</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link href="#link" >Gallery</Nav.Link>
                        <Nav.Link href="#link" >Blog</Nav.Link>
                        <NavDropdown title="Locations" id="basic-nav-dropdown nav-dropdown" >
                            <NavDropdown.Item href="#action/3.1">Calgary</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Lloydminster</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Red Deer</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Westbank</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Regina</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Spruce Grove</NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link href="#link" >Contact Us</Nav.Link>
                        <Nav.Item><FaShoppingCart className='nav-icon' /></Nav.Item>
                    </Nav>
                    {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}





export default NavBar;