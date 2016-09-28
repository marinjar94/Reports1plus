import React from 'react';
 
export default class Cell extends React.Component {
   constructor() {
        super();
    }

    render() {

    	
        return (<td style={{padding:"10px", margin:"10px"}}>
                {this.props.cellNumber}
                </td>)
    }


}