import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {logout} from './../store/userActions'; 
import {connect} from 'react-redux';

  function NavMenu({isAuthenticated, logout}){

    return (
    <Navbar bg="light" variant="dark">
        {
             isAuthenticated ? 
             <Navbar.Brand > 
             <NavLink
              to='/'
              activeClassName = 'activeLink'
              exact 
              >
             HOME
             </NavLink>
             </Navbar.Brand > :
             <> 
             <NavLink className="mr-auto"
             to='/register'
              activeClassName = 'activeLink'
              exact
              >
             Register
             </NavLink>
             <NavLink className="mr-auto"
             to='/login'
              activeClassName = 'activeLink'
              exact
              > 
              Login
              </NavLink>
             </> 
            }

             {/*<Nav className="mr-auto">
               <NavLink
                to='/task' 
                exact
                activeClassName = 'activeLink'
                >
                TASK
                </NavLink>
                </Nav>*/}

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
            {isAuthenticated && 
            <Button
             variant = "primary"
             onClick= {logout}
             >Logout</Button>
             }
     </Navbar>
    );
}
const mapStateToProps = (state)=>{
    return{
        isAuthenticated: state.authReducer.isAuthenticated
    };
}

const mapDispatchToProps = {
    logout
};
export default connect(mapStateToProps,mapDispatchToProps)(NavMenu);