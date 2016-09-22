import React from 'react';
import Cell from './cell.jsx';

export default class Row extends React.Component {
   constructor() {
        super();      
		
    }
    
    render() {

        return (<tr>

                	{



                		this.props.ObjectArray.map(function(value){
                				return <Cell key={value} cellNumber={value}/>}

                	)
				}
				
		
                </tr>)
    }
}