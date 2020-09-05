import React, {Component} from 'react';

 class Name extends Component{
    render(){
        let {name} = this.props;
        return(
            
                <p>Name:{name}</p>
            
        );
    }
     
 }

 export default Name;