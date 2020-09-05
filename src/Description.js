import React, {Component} from 'react';

 class Description extends Component{
    render(){
        let {data} = this.props;
        return(
            <p>Description:{data}</p> 
        );
    } 
 }
export default Description;