import React from 'react';
import {Route, Redirect}  from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function CustomRoute ({isAuthenticated, type='public', path, exact, component: Component}){
   if(type === 'private'){
    return (
        <Route  path= {path} exact= {exact} render={(props)=>{ 
        return isAuthenticated ?
               <Component {...props} /> :
              <Redirect to='/login'/>
        }}/> 
    ); 
   }
   else{
    return (
        <Route  path= {path} exact= {exact} render={(props)=>{ 
        return !isAuthenticated ?
               <Component {...props} /> :
              <Redirect to='/'/>
        }}/> 
    );
   }
 }

const mapStateToProps = (state)=>{
    return {
        isAuthenticated:state.authReducer.isAuthenticated 
    };
};

  CustomRoute.propTypes = {
      type: PropTypes.oneOf(['private','public']),
      path: PropTypes.string,
      exact: PropTypes.bool,
      component: PropTypes.object 
  }

export default connect(mapStateToProps)(CustomRoute);