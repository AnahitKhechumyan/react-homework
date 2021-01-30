import React, {useEffect} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {logout} from '../../store/userActions'; 
import {connect} from 'react-redux';
import {getUserInfo} from '../../store/userActions';
import styles from  './navMenuStyle.module.css';


  function NavMenu({isAuthenticated, logout, getUserInfo, user}){
    useEffect(()=>{
        if(isAuthenticated){
            getUserInfo();  
        }
    }, [getUserInfo,isAuthenticated]);

    return (
           <>
           <Navbar className = {styles.navigationPanel} variant="light">
          {
             isAuthenticated ? 
              
             <NavLink
              to='/'
              activeClassName = {styles.activeLink}
              exact 
              >
             Home
             </NavLink>
              :
             <> 
             <NavLink 
             to='/register'
              activeClassName = {styles.activeLink}
              exact
              >
             Register
             </NavLink>
             <NavLink 
             to='/login'
              activeClassName = {styles.activeLink}
              exact
              > 
              Login
              </NavLink>
             </> 
            }

             <NavLink 
                exact 
                activeClassName = {styles.activeLink}
                to='/about'>
                About
            </NavLink>
            

            <Nav className="mr-auto">
                <NavLink 
                exact 
                activeClassName = {styles.activeLink}
                to='/contact'>
                Contact
                </NavLink>
            </Nav>
            {
               user &&  <p className = "userName">{user.name} {user.surname}</p>
            }
           
            {isAuthenticated && 
            <Button
             className = {styles.button}
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