import React, {useEffect, useState} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';  
import {register} from '../../../store/userActions';
import {Link} from 'react-router-dom';
import styles from './registerStyle.module.css';



function Register(props){
    const [values, setValues] = useState({
        email: '' ,
        password: '' ,
        confirmPassword: '',
        name:'',
        surname:''
    });                                                                                                                                                                                                                                                                    
    const [errors, setErrors] = useState({
        email: null,
        password: null,
        confirmPassword: null,
        name: null,
        surname: null
    });

    const handleSubmit = ()=>{
        //event.preventDefault();
        const {name, surname, email, password, confirmPassword} = values;

        let valid = true;

        let passwordMessage = null;
        if(!confirmPassword){
            passwordMessage =  'Password is required'; 
            valid = false; 
        }
        else if(password !== confirmPassword){
            passwordMessage = "Password didn't match";
            valid = false; 
        }
        setErrors({
            name:name ? null : 'Name is required',
            surname:surname ? null : 'Surname is required',
            email: email ? null : 'Email is required', 
            confirmPassword: passwordMessage,
            password: password ? null : 'Password is required'

         });
         if(valid){
         props.register(values);
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
      const {registerSuccess, history} = props;
      useEffect(()=>{
          if(registerSuccess){
              history.push('/login');
          }

      }, [registerSuccess, history])

    return(
    <div className={styles.main}>
        <Container> 
         <Row className="justify-content-center"> 
          <Col xs={12} sm={8} md={6}> 
           <Form>
               <h5 className={styles.heading}>Register</h5>
            <Form.Group>
            <Form.Control
                className={errors.name? styles.invalid:''}
                 type="text"
                 name="name"
                 placeholder="Enter your name"
                 value={values.name} 
                 onChange={handleChange}
                 />
                 {
                   <Form.Text className="text-danger">
                      {errors.name}
                   </Form.Text>
                 }    
                </Form.Group>
                <Form.Group>
                 <Form.Control
                className={errors.surname? styles.invalid:''}
                 type="text"
                 name="surname"
                 placeholder="Enter your surname"
                 value={values.surname} 
                 onChange={handleChange}
                 />
                 {
                   <Form.Text className="text-danger">
                      {errors.surname}
                   </Form.Text>
                 }    
               </Form.Group>
               <Form.Group>
               <Form.Control
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

            <Form.Group>
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

             <Form.Group>
                <Form.Control 
                 className={errors.confirmPassword? styles.invalid:''} 
                 type="password"
                 placeholder=" Confirm Password" 
                 name="confirmPassword"
                 value={values.confirmPassword} 
                 onChange={handleChange}
                 />
                {
                   <Form.Text className="text-danger">
                      {errors.confirmPassword}
                   </Form.Text>
                 }       
             </Form.Group>
        <div className={styles.submitContainer}> 
             <Button
              variant="primary"
              onClick={handleSubmit}
              >
                Register
             </Button>
        </div>
           <Link to= '/login'>Already registered? Try to login.</Link>
           </Form>
          </Col>
         </Row>
        </Container>
    </div>
    );
 }
     const mapStateToProps = (state)=>{
         return{
             registerSuccess: state.authReducer.registerSuccess
         }
     }
     const mapDispatchToProps = {
         register
     }     
    

export default connect(mapStateToProps, mapDispatchToProps)(Register);

//function Register(){
    //const [values, setValues] = useState({
       // email: '' ,
       // password: '' ,
       // confirmPassword:''
    //});

    //const handleSubmit = (event)=>{
       // event.preventDefault();
    //};

    //const handleChange = ({target: {name, value}})=>{
        //setValues({
           // ...values,
           // [name]: value
       // });
    //};

   // return(
        // <div>
            //</div> <form action="http://localhost:3001/contact" method='POST'>
           //<input
            //value= {values.email}
            //onChange = {handleChange}
            // type="email"
            // name="email"
            // />
            //</form>/ <input
            // value= {values.password}
            // onChange = {handleChange} 
            // type="password"
            // name="password"
            // />
            //</form> <input 
            // value= {values.cofirmPassword}
            // onChange = {handleChange}
            // type="password"
            // name="cofirmPassword"
            // />
            // <input type="submit"
            // onClick={handleSubmit}
           //  />
           //  </form>
        // </div>
   // );
//}

//export default Register;