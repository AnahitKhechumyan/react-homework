import React, { PureComponent } from 'react';
import { FormControl, Button, Modal, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DatePicker  from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from './newTask.module.css';

class NewTask extends PureComponent {
    state = {
        title: '',
        description: '',
        date: new Date()
    };

    handleChange = (type, value)=>{
       this.setState({
          [type]:value
       });
    };
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
        event.preventDefault();
         this.handleSave();
        }
    };

     handleSave = () =>{
         const {title, description, date} = this.state;
         if(!title) return;
        
        const data = {
            title,
            description,
            date: date.toISOString().slice(0, 10)
         };

         this.props.onAdd(data);
     }
    
    render() {
        return(
            <Modal
        size = "lg"
        aria-labelledby = "contained-modal-title-vcenter"
        centered
        show = {true}   
        onHide = {this.props.onCancel}
        >
        <Modal.Header closeButton>
            <Modal.Title id = "contained-modal-title-vcenter">
                Add new task
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormControl
                value={this.state.title}
                onChange ={(event) =>this.handleChange('title', event.target.value)}
                onKeyDown={this.handleKeyDown}
                placeholder="Title"
                aria-label="Title"
                aria-describedby="basic-addon2"
            />
                  <Form.Control
                   as = "textarea"
                   rows = {3}
                   placeholder = "Dascription"
                   className = "my-3"
                   onChange ={(event) =>this.handleChange('description', event.target.value)}
                   />
                   <div
                    className = {styles.datePicker}
                    >
                   <DatePicker
                   selected = {this.state.date}
                   minDate = {new Date()}
                   onChange = {(value)=>this.handleChange('date',value)} 
                   />
                   </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick = {this.handleSave} variant = 'success'>Add</Button>
            <Button onClick = {this.props.onCancel} variant = 'secondary'>Cancel</Button>
        </Modal.Footer>    
        </Modal>
        );
    }
}

NewTask.propTypes = {
      onAdd: PropTypes.func.isRequired,
      onCancel: PropTypes.func.isRequired
};

export default NewTask;