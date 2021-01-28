import React, { useState} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';  
import {login} from '../../../store/userActions';
import styles from './loginStyle.module.css';
import {Link} from 'react-router-dom';



function Login(props){
    const [values, setValues] = useState({
        email: '' ,
        password: ''
    });                                                                                                                                                                                                                                                                    
    const [errors, setErrors] = useState({
        email: null,
        password: null
    });

    const handleSubmit = ()=>{
        //event.preventDefault();
        const {email, password} = values;
    
        setErrors({
            email: email ? null : 'Email is required', 
            password: password ? null : 'Password is required'
         });
         if(email && password){
         props.login(values);
         }
     };

    const handleChange = ({target: {name, value}})=>{
        setValues({
            ...values,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]:null 
         });
    };
      //const {registerSuccess, history} = props;
      //useEffect(()=>{
       //   if(registerSuccess){
        //     history.push('/login');
        //  }

     // }, [registerSuccess, history])

    return(
    <div className={styles.main}>
        <Container fluid> 
         <Row className="justify-content-center"> 
          <Col xs={12} sm={8} md={6}> 
           <Form>
               <h5 className={styles.heading}>Login</h5>
               <Form.Group id={styles.loginForm}>
               <Form.Control
                id={styles.loginInput}
                className={errors.email? styles.invalid:''}
                 type="email"
                 name="email"
                 placeholder="Enter email"
                 value={values.email} 
                 onChange={handleChange}
                 />
                 {
                   <Form.Text className="text-danger">
                      {errors.email}
                   </Form.Text>
                 }                   
            </Form.Group>

            <Form.Group  id={styles.loginForm}>
                <Form.Control
                 className={errors.password? styles.invalid:''} 
                 type="password"
                 placeholder="Password" 
                 name="password"
                 value={values.password} 
                 onChange={handleChange}
                 />
                 {
                   <Form.Text className="text-danger">
                      {errors.password}
                   </Form.Text>
                 }       
             </Form.Group>  
        <div className="text-center"> 
             <Button
              className={styles.loginButton}
              variant="primary"
              onClick={handleSubmit}
              >
                Login
             </Button>
        </div>
           <Link className={styles.loginLink} to='/register'>Don't have account yet? Register now!</Link>
           </Form>
          </Col>
         </Row>
        </Container>
    </div>
    );
 }
     
     const mapDispatchToProps = {
         login
     };     
    

export default connect(null, mapDispatchToProps)(Login);