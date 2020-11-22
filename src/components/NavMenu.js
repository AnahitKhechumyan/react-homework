import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


export default  function NavMenu(){

    return (
    <Navbar bg="light" variant="dark">
            <Navbar.Brand > 
                <NavLink
                exact 
                 activeClassName = 'activeLink'
                 to='/'
                 >
                HOME
                </NavLink> 
            </Navbar.Brand>

            <Nav className="mr-auto">
                <NavLink
                to='/task' 
                exact
                activeClassName = 'activeLink'
                >
                TASK
                </NavLink>
            </Nav>

            <Nav className="mr-auto">
                <NavLink 
                exact 
                activeClassName = 'activeLink'
                to='/about'>
                About
                </NavLink>
            </Nav>

            <Nav className="mr-auto">
                <NavLink 
                exact 
                activeClassName = 'activeLink'
                to='/contact'>
                Contact
                </NavLink>
            </Nav>

     </Navbar>
    );
}