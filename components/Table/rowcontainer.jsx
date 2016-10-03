import React from 'react';
import Row from './row.jsx'

export default class RowContainer extends React.Component {
   constructor() {
        super();
    }
    
    render() {

var singleObjectArray=[];
for (var objectprop in this.props.data){
    
    
singleObjectArray.push(this.props.data[objectprop]);
} 

        return (


         <Row ObjectArray={singleObjectArray}/>
				
                )
    }
}