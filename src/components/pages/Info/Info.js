import React from 'react'; 
import {Container, Row, Col} from 'react-bootstrap';
import styles from './infoStyle.module.css';

 

function Info(){    
        return(
           <div className={styles.main}>
            <Container> 
                <Row className="justify-content-center"> 
                    <Col xs={12} sm={12} md={10} lg={8} xl={8}>
                        <div className={styles.aboutText}>
                            <h1>BY NOT PLANNING <br/>WHAT TO DO,<br/> WE ARE PLANNING<br/> OUR FAILURE...</h1>
                        </div>
                        <div>
                            <p className= {styles.aboutTodo}>This project is a simple to use <span>To Do</span> list app that can help you plan,
                                 track, and get more tasks done. You can create unlimited tasks, set status, filter the list of the
                                 tasks with several conditions, edit and delete the tasks, change the status.</p>
                        </div>
                    </Col>
                </Row> 
            </Container> 
                        
           </div>
        );
    
   }



export default Info;
