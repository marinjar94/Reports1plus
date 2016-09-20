import React from 'react';
import Cell from './cell.jsx';

export default class Row extends React.Component {
   constructor() {
        super();
        
		
    }
    
    render() {
//------------------porque aca en this.props no me sale las props sino [object object]
console.log("aylmao " + this.props);
console.log("this is your prop data" + this.props.data); 
				/*
        		Esto es lo mismo que ocurrió en el componente Table,
        		sólo que ahora, además del componente, estoy asignando un valor a una prop ("cellNumber")
        		Ese valor será pasado como prop al componente en el orden correspondiente
        		 */

//------------Como hago para pasar una prop desde un parent a este child? Quisiera pasar el query desde table(que a su vez sera pasado por un componente de filter) a table

var query2=[[4,2,3],[12,34,35],[66,77,88]];

        return (<tr>

                	{
//---------------por que este if no me sirve? este if seria para cambiar la i en query[i] y que map dibuje cada row con los diferentes elementos del array query(que tambien son arrays). y si le quite dos curly braces iirc
       //function (){
		//	for (var i=0 ;i < query2.length ; i++){




                		query2[2].map(function(value){
                				return <Cell cellNumber={value}/>}

                	)
				}
				
		
                </tr>)
    }
}