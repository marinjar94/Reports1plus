import React from 'react';
 
export default class Cell extends React.Component {
   constructor() {
        super();
        
    }

    render() {

    	
        return (<td style={{border:"0.5px solid black", margin:"0px"}}>
        
                
                {this.props.cellNumber}
                </td>)
    }


}