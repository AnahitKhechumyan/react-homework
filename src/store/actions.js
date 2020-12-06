import request from '../helpers/request';

export function getTasks(){
    return (dispatch)=>{

        request('http://localhost:3001/task')
        .then(tasks => {
           dispatch({type: 'GET_TASKS_SUCCESS', tasks})
        });
    }
}