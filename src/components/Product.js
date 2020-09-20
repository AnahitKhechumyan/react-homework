import React,{Component}from 'react';
import Name from  './Name';
import Prise from './Prise';
import Description from './Description';


 class  Product extends Component{
    render(){
        let {name,prise,description} = this.props;
         return(
             <>
              <Name data = {name}/>
              <Prise data = {prise}/>
              <Description data = {description}/>  
             </>     
         ); 
    }
}
export  default Product; 