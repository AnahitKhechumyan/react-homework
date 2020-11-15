import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default  function NavMenu(){

    return (
    <Navbar bg="light" variant="dark">
          <Navbar.Brand > 
          <Link to='/'>HOME</Link> 
          </Navbar.Brand>
          <Nav className="mr-auto">
          <Link to='/task'>TASK</Link>
          </Nav>
          <Nav className="mr-auto">
          <Link to='/about'>About</Link>
          </Nav>
          <Nav className="mr-auto">
          <Link to='/contact'>Contact</Link>
          </Nav>
     </Navbar>
    );
}