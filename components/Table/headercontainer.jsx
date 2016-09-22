import React from 'react';
import Row from './row.jsx'

export default class HeaderContainer extends React.Component {
   constructor() {
        super();
   
    }
    
    render() {

var singleObjectArray=[];
console.log(this.props.data);
for (var objectprop in this.props.data){

singleObjectArray.push(objectprop);
console.log(singleObjectArray);
} 

        return (


         <Row ObjectArray={singleObjectArray}/>
				
                )
    }
}