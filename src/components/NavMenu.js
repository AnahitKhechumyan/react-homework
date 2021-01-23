import React, {useEffect} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {logout} from './../store/userActions'; 
import {connect} from 'react-redux';
import {getUserInfo} from './../store/userActions';

  function NavMenu({isAuthenticated, logout, getUserInfo, user}){
    useEffect(()=>{
        if(isAuthenticated){
            getUserInfo();  
        }
    }, [getUserInfo,isAuthenticated]);

    return (
           <>
           {user && <div className = "text-left"><h5>{user.name} {user.surname}</h5></div>}
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
     </>
    );
}
const mapStateToProps = (state)=>{
    return{
        isAuthenticated: state.authReducer.isAuthenticated,
        user: state.authReducer.userInfo
    };
}

const mapDispatchToProps = {
    logout,
    getUserInfo
};
export default connect(mapStateToProps,mapDispatchToProps)(NavMenu);