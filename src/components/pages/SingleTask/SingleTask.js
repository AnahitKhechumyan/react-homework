import React, {PureComponent} from 'react';
import { Button, Tooltip, OverlayTrigger} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faEdit, faCheck, faHistory} from '@fortawesome/free-solid-svg-icons';
import EditTaskModal from '../../EditTaskModal';
import {getTask, removeTask, changeTaskStatus} from '../../../store/actions';
import {connect} from 'react-redux';
import {formatDate} from '../../../helpers/utils';
import styles from '../../Task/task.module.css';

class SingleTask extends PureComponent{
    state = {
        isEdit: false
    };
    componentDidMount(){
        const taskId = this.props.match.params.id;
        this.props.getTask(taskId); 
       } 

       componentDidUpdate(prevProps){
         if(!prevProps.removeTaskSuccess && this.props.removeTaskSuccess){
            this.props.history.push('/'); 
         }
         if(!prevProps.editTaskSuccess && this.props.editTaskSuccess){
            this.toggleEditModal();
         }
        } 
 

      handleRemove = ()=>{
         const taskId = this.props.task._id;
         this.props.removeTask(taskId, 'single');
      }

      toggleEditModal = ()=>{
         this.setState({
           isEdit: !this.state.isEdit
         });
      }
      //handleSave = (taskId,data)=>{
          // this.props.editTask(taskId,data);
     // }
     render(){

      const {task, disabled} = this.props;
      const {isEdit} = this.state;

        return(
         <>
          {
         task ?
           <div className= {styles.singleTaskParent}> 
           <div className={styles.singleTask}>
               <p><span>Title:</span>{task.title}</p>
               <p className={styles.descriptionContainer}><span>Description:</span>{task.description}</p>
               <p><span>Date:</span>{formatDate(task.date)}</p>
               <p><span>Created:</span>{formatDate(task.created_at)}</p>
               <p><span>Status:</span>{task.status}</p>

              <div className= {styles.actionButtonContainer}> 
               {
                task.status === "active" ?
                <OverlayTrigger
                 placement = "top"
                 overlay = {
                   <Tooltip >
                     <strong>Mark as done</strong>
                   </Tooltip>
                 }
                 > 
                  <Button 
                    title = 'Mark as done'
                    className = {styles.btnSuccess}
                    variant = "success" 
                    onClick = {()=> this.props.changeTaskStatus(task._id, {status: 'done'},'single')}
                    disabled = {disabled}
                    >
                    <FontAwesomeIcon icon = {faCheck} />
                  </Button>  
                 </OverlayTrigger>
                 :
                 <OverlayTrigger
                 placement = "top"
                 overlay = {
                   <Tooltip >
                     <strong>Mark as active</strong>
                   </Tooltip>
                 }
                 > 
                   <Button 
                    title = 'Mark as active'
                    className = {styles.btnWarning}
                    variant = "warning" 
                    onClick = {()=> this.props.changeTaskStatus(task._id, {status: 'active'}, 'single')}
                    disabled = {disabled}
                    >
                    <FontAwesomeIcon icon = {faHistory}/>
                  </Button>  
                 </OverlayTrigger>
                 }

                

               <OverlayTrigger
               placement = "top"
               overlay = {
                 <Tooltip id = {`tooltip-top`}>
                   <strong>Edit</strong>
                 </Tooltip>
               }
               > 
                 <Button 
                  title = 'Edit'
                  className = {styles.btnInfo}
                  variant = "info" 
                  onClick = {this.toggleEditModal}
                  >
                  <FontAwesomeIcon icon = {faEdit} />
                </Button>  
               </OverlayTrigger>
                
               <OverlayTrigger
               placement = "top"
               overlay = {
                 <Tooltip id = {`tooltip-top`}>
                    <strong>Remove</strong>
                 </Tooltip>
               }
               >
                <Button 
                  title = 'Remove'
                  className = {styles.btnDanger}
                  variant = "danger" 
                  onClick = {this.handleRemove}
                  >
                  <FontAwesomeIcon icon = {faTrash}/>
               </Button>

               </OverlayTrigger>

               {isEdit &&
                <EditTaskModal
                data = {task}
                onCancel = {this.toggleEditModal}
                from = 'single'
                />
               }
             </div>
            </div>
            </div>
            :
            <div>There is no task!</div>
         }
                  
         </>
        ); 
      }
}

const mapStateToProps = (state) => {
   return{
      task:state.taskReducer.task,
      removeTaskSuccess: state.taskReducer.removeTaskSuccess,
      editTaskSuccess: state.taskReducer.editTaskSuccess,
      changeTaskStatusSuccess: state.taskReducer.changeTaskStatusSuccess
   };
}

const mapDispatchToProps = {
   getTask,
   removeTask,
   changeTaskStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleTask);