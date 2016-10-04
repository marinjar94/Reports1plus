import React from 'react';
import Cell from './cell.jsx';

export default class Row extends React.Component {
   constructor() {
        super();      
		
    }
    
    render() {

        return (<tr>

                	{



                		this.props.ObjectArray.map(function(value, index){
                				return <Cell key={value+" "+index} cellNumber={value}/>}

                	)
				}
				
		
                </tr>)
    }
}