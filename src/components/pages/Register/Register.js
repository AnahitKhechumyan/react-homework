import React, {useState} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import styles from './registerStyle.module.css'



function Register(){
    const [values, setValues] = useState({
        email: '' ,
        password: '' ,
        confirmPassword: ''
    });                                                                                                                                                                                                                                                                    
    const [errors, setErrors] = useState({
        email: null,
        password: null,
        confirmPassword: null
    });

    const handleSubmit = ()=>{
        //event.preventDefault();
        const {email, password, confirmPassword} = values;
        let passwordMessage = null;
        if(!confirmPassword){
            passwordMessage =  'Password is required';  
        }
        else if(password !== confirmPassword){
            passwordMessage = "Password didn't match";
        }
        setErrors({
            email: email ? null : 'Email is required', 
            confirmPassword: passwordMessage,
            password: confirmPassword ? null : 'Password is required'
         });
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

    return(
    <div className={styles.main}>
        <Container> 
         <Row className="justify-content-center"> 
          <Col xs={12} sm={8} md={6}> 
           <Form>
               <h5 className={styles.heading}>Register</h5>
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
           </Form>
          </Col>
         </Row>
        </Container>
    </div>
    );
          
    
}

export default Register;

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