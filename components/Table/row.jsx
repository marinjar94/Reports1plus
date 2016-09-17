import React from 'react';
import Cell from './cell.jsx';

export default class Row extends React.Component {
   constructor() {
        super();
        
    }
    
    render() {

				/*
        		Esto es lo mismo que ocurrió en el componente Table,
        		sólo que ahora, además del componente, estoy asignando un valor a una prop ("cellNumber")

        		Ese valor será pasado como prop al componente en el orden correspondiente
        		 */

        return (<tr>
                	{
        
                		[1,2,3,4].map(function(value){
                				return <Cell cellNumber={value}/>
                	})
                	}
                </tr>)
    }
}