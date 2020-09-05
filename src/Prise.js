import React, {Component}from 'react';

 class Prise extends Component{
    render(){
      let {prise} = this.props;
        return(
           <p>Prise:{prise}</p>
        );
    }  
 }

 export default Prise;