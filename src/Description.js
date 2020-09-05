import React, {Component} from 'react';

 class Description extends Component{
    render(){
        let {description} = this.props;
        return(
            <p>Description:{description}</p> 
        );
    } 
 }
export default Description;