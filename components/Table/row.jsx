import React from 'react';
import Cell from './cell.jsx';

export default class Row extends React.Component {
   constructor() {
        super();      
		
    }
    
    render() {

        return (<tr>
{this.props.children==undefined? null: <td style={{padding:"10px", margin:"10px"}}>{this.props.children}</td>}
                	{



                		this.props.ObjectArray.map(function(value, index){
                				return <Cell key={value+" "+index} cellNumber={value}/>}

                	)
				}
				
		
                </tr>)
    }
}