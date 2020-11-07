import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import NewTask from './NewTask/NewTask';
import Task from './Task/Task';
import Confirm from './Confirm';
import EditTaskModal from './EditTaskModal';



class ToDo extends Component {
   state = {
      tasks:[],
      checkedTasks:new Set(),
      showConfirm:false,
      editTask:null,
      openNewTaskModal:false
   }

   componentDidMount(){

      fetch(' http://localhost:3001/task ', {
         method: 'GET',
         headers:{
            "Content-Type": 'application/json',
         }
      })
      .then((response)=> response.json())
      .then((task)=>{
         if(task.error){
            throw task.error;
         }
         this.setState({
            task
         });  
          
        })
        .catch((err) =>{
          //console.log('err',err);    
        });
     };  

   addTask = (data)=>{

      fetch(' http://localhost:3001/task ', {
         method: 'POST',
         body: JSON.stringify(data),
         headers:{
            "Content-Type": 'application/json',
         }
         })
      .then((response)=> response.json())
      .then((task)=>{
         if(task.error){
            throw task.error;
         }
         this.setState({
            tasks:[task,...this.state.tasks],
            openNewTaskModal:false
         });
      })
      .catch((err) =>{
         //console.log('err',err);    
       });
      };
   removeTask = (taskId)=>() =>{
      fetch(`http://localhost:3001/task/${taskId}`, {
         method: 'DELETE',
         headers:{
            "Content-Type": 'application/json',
         }
         })
      .then((response)=> response.json())
      .then((task)=>{
         if(task.error){
            throw task.error;
         }
          const newTasks = this.state.tasks.filter(task =>task._id !==taskId);
          this.setState({
          tasks:newTasks
       }); 
      })
      .catch((err) =>{
         //console.log('err',err);    
       });
      
   };
   handleCheck = (taskId)=> () =>{
       const checkedTasks =new Set(this.state.checkedTasks);
       if(checkedTasks.has(taskId)){
       checkedTasks.delete(taskId);
       }
       else{
         checkedTasks.add(taskId);
       }
      
       this.setState({checkedTasks});
   };
    
   handleEdit = (task) =>() =>{
      this.setState({editTask: task});
  };
   
   onRemoveSelected = ()=>{
      const checkedTasks = new Set(this.state.checkedTasks);

      fetch(`http://localhost:3001/task/`, {
         method: 'PATCH',
         body: JSON.stringify({
            tasks:[...checkedTasks]
         }),
         headers:{
            "Content-Type": 'application/json',
         }
       })
      .then((response)=> response.json())
      .then((data)=>{
         if(data.error){
            throw data.error;
         }
         
                let tasks = [...this.state.tasks];

      checkedTasks.forEach(taskId =>{
         tasks =  tasks.filter(task => task._id !== taskId);
      });

      checkedTasks.clear();

      this.setState({
         tasks,
         checkedTasks,
         showConfirm:false
      });

   })
   .catch((err) =>{
      //console.log('err',err);    
    });
   
   };


      toggleConfirm = () =>{
         this.setState({
            showConfirm:!this.state.showConfirm
         });
      };

      handleSave = (taskId, data) =>{
         fetch( `http://localhost:3001/task/${taskId}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers:{
               "Content-Type": 'application/json',
            }
            })
         .then((response)=> response.json())
         .then((editedtask)=>{
            if(editedtask.error){
               throw editedtask.error;
            }
            const tasks = [...this.state.tasks];
                 const foundIndex = tasks.findIndex(task => task._id === editedtask._id );
                 tasks[foundIndex] = editedtask;

              this.setState({tasks, editTask: null});
         })
         .catch((err) =>{
              //console.log('err',err);    
         });
       };

       toggleNewTaskModal = ()=>{
         this.setState({
            openNewTaskModal: !this.state.openNewTaskModal
         });
       };
       render(){
        const {checkedTasks,tasks,  showConfirm, editTask} = this.state;
        const tasksComponents =tasks.map((task)=>
           <Col key = {task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
           <Task 
              data = {task}
              onRemove = {this.removeTask}
              onCheck = {this.handleCheck(task._id)}
              onEdit = {this.handleEdit(task)}
              disabled = {!!checkedTasks.size}
           />
           </Col>
        );
       
         return( 
            <Container fluid ={true}>
               <Row >
                  <Col md={{span:6, offset:3}} className = "text-center">
                     <Button
                     variant = "primary"
                     className = 'm-3'
                     disabled = {checkedTasks.size}
                     onClick = {this.toggleNewTaskModal}>
                      Add new task
                     </Button>
                  </Col>
                </Row>

                <Row className='justify-content-center'>
                    <Button
                     variant = "danger"
                     disabled = {!checkedTasks.size}
                     onClick = {this.toggleConfirm}>
                      Remove selected
                     </Button>
                </Row>
                

                <Row>
                      {tasksComponents}
                </Row>
                
                    { showConfirm &&
                      <Confirm
                       count = {checkedTasks.size}
                       onSubmit = {this.onRemoveSelected}
                       onCancel = {this.toggleConfirm}/>
                     }
                     { !!editTask &&
                       <EditTaskModal 
                        value = {editTask}
                        data = {editTask}
                       onSave = {this.handleSave}
                       onCancel = {this.handleEdit(null)}
                     />
                  }
                  { this.state.openNewTaskModal &&
                     <NewTask
                     onAdd = {this.addTask}
                     onCancel = {this.toggleNewTaskModal} 
                    />
                  }
             </Container>
         );
      }
   }
  export default ToDo;
 
       
         
 