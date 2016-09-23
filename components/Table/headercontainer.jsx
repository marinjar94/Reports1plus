import React from 'react';
import Row from './row.jsx'

export default class HeaderContainer extends React.Component {
   constructor() {
        super();
    }
    
    render() {

var singleObjectArray=[];
for (var objectprop in this.props.names){

singleObjectArray.push(this.props.names[objectprop]);
} 

        return (


         <Row ObjectArray={singleObjectArray}/>
				
                )
    }
}