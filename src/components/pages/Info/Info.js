import React from 'react'; 
import {Container, Row, Col} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import styles from './infoStyle.module.css';

 

function Info(){    
        return(
           <div className={styles.main}>
            <Container> 
                <Row className="justify-content-center"> 
                    <Col xs={12} sm={8} md={6}>
                        <div className={styles.aboutText}>
                            <h1>Չպլանավորելով ոչինչ՝ պլանավորում ենք մեր անհաջողությունը</h1>
                        </div>
                    </Col>
                </Row>  
            </Container> 
           </div>
        );
    
   }



export default Info;
