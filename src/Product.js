import React,{Component}from 'react';
import Name from  './Name';
import Prise from './Prise';
import Description from './Description';


 class  Product extends Component{
    render(){
        let {name,prise,description} = this.props;
         return(
             <>
              <p>Name: {name}</p>
              <p>Prise: {prise}</p>
              <p>Description: {description}</p>   
             </>     
         ); 
    }
}
export  default Product;