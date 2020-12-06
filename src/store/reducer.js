const defaultState = {
    tasks: [] ,
  };

  export const mainReducer = (state = defaultState, action)=>{
    switch(action.type){
      case 'GET_TASKS_SUCCESS':{
        return{
          ...state,
          tasks: action.tasks
        }
      }
     default: return state;
   }
  };
  
   