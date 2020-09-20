import React, {Component}from 'react';

 class Prise extends Component{
    constructor(props){
       super(props);
          this.state = {
              prise: props.data,
              exchangerate:478
            }
       }
    chengeCurrency =()=>{
      let {prise, exchangerate } = this.state; 
      let sign = prise[prise.length-1];

      if(sign === "$"){
         prise = parseFloat(prise) * exchangerate+"֏";
      }
      else if(sign === "֏"){
         prise = parseFloat(prise) / exchangerate+"$";
      }

      this.setState({
         prise: prise
      })
   };


    render(){
      let {prise} = this.state;
        return(
           <p>
             Prise:{prise}
               <button onClick = {this.chengeCurrency}>
                  Change the currency 
               </button>
           </p>
        );
    }  
   }

 export default Prise;