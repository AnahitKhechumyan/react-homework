import React,{useState} from 'react'; 
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';  
import {sendMessage} from '../../../store/userActions';
// import {Link} from 'react-router-dom';
import styles from './contactStyle.module.css';

 

function Contact(props){
    const [values, setValues] = useState({
        email: '' ,
        message: '',
        name:''
         
    });                                                                                                                                                                                                                                                                    
    const [errors, setErrors] = useState({
        email: null,
        message: null,
        name: null
         
    });
    
         
    const handleSubmit = ()=>{
        const {name, email, message} = values;
         

        setErrors({
            name:name ? null : 'Name is required',
            email: email ? null : 'Email is required', 
            message: message ? null : 'Message is required'

         });
         if(values){
              props.sendMessage(values, emptyForm);     
         }
         
    }; 
    const emptyForm = ()=>{
        setValues({
            name: '',
            email: '', 
            message: ''

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
           <div className={[styles.main, styles.contactContainer].join(" ")}>
           <Container> 
           <Row className="justify-content-center"> 
           <Col xs={12} sm={8} md={6}> 
           <Form>
                <h5 className={styles.heading}>Contact</h5>
               <Form.Group controlId="formBasicName">
                <Form.Control
                className={errors.name? styles.invalid:''}  
                type="text"
                name="name"
                placeholder="Enter your name."
                value={values.name}
                onChange={handleChange}
                 />
                 {
                     <Form.Text className="text-danger-big">
                         {errors.name}
                     </Form.Text>
                 }

               </Form.Group>
               <Form.Group controlId="formBasicEmail">
                 <Form.Control
                  className={errors.email? styles.invalid:''}  
                  type="email"   
                  placeholder="Enter  email."
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                   />
                   {
                       <Form.Text className="text-danger-big">
                           {errors.email}
                       </Form.Text>
                   }
               </Form.Group>
                <Form.Group controlId="formBasicMessage">
                <Form.Control
                 className={errors.message? styles.invalid:''}  
                 type="text" 
                 name="message"
                 placeholder="Enter message."
                 value={values.message}
                 onChange={handleChange}
                 />
                  {
                       <Form.Text className="text-danger-big">
                           {errors.message}
                       </Form.Text>
                   }
               </Form.Group>
              <div className={styles.submitContainer}>   
                <Button variant="primary"               
                 className={styles.contactButton}
                 onClick={handleSubmit}
                >
                    Send
                </Button>
                </div>
           </Form>
           </Col>
           </Row>  
           </Container> 
           </div>
        );
    
   }

const mapDispatchToProps = {
    sendMessage
}     


export default connect(null, mapDispatchToProps)(Contact);
