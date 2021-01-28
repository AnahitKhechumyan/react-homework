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
                            <h1>BY NOT PLANNING <br/>WHAT TO DO,<br/> WE ARE PLANNING<br/> OUR FAILURE...</h1>
                        </div>
                        <div>
                            <p className= {styles.aboutTodo}>sadfghbjnmk,jhkjhkj kjlj;jdffghjhkgk hbjkbkkgkjgkgkjg bjkgkjgk jbjkbgjkgjkgjkgkj  s;j;k;;;</p>
                        </div>
                    </Col>
                </Row>  
            </Container> 
                        
           </div>
        );
    
   }



export default Info;
