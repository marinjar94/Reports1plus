import React from 'react';
import Row from './row.jsx';


export default class Table extends React.Component {
   constructor() {
        super();
        
	
    }
    
    	/*
Dentro de las funciones de render() podemos retornar el codigo que constituye al componente para ser creado cuando
sea llamado y usado por ReactDOM.render(), directa o indirectamente. Siempre tiene que haber un tag que contenga
a todos los otros; no necesariamente tiene que ser un <div></div>, como se puede apreciar en este caso donde utilizo
es un <table></table>
 */
        render() {

var query=[[1,2,3],[12,34,35],[66,77,88],[1,2,3],[12,34,35],[66,77,88]];
/*
        	En este momento me ayudo de dos cosas para retornar una cantidad variable de elementos (en este caso, varios <Row/>):
        	a)El uso de curly braces {} para poder utilizar código javascript, variables y esas cosas conjuntamente con JSX
        	b)la función [array].map(), que me devuelve un nuevo array con valores modificados y mappeados a cada valor del array
        	sobre el cual se utilizó. Normalmente asignariamos este nuevo array a una variable, pero aquí sólo lo retornamos y
        	lo que tendremos será una lista de Componentes con props definidas por nosotros 
        	(si es que se quiere añadir props, claro; en este momento, sólo va a retornar 4 instancias del componente <Row/>)
        	 */
        return(
        	<table>
        
                	<tbody>
                		{
                			query.map(function(data){
							console.log(query);
        				return  <Row/>
                		
                		        		})
      
	        		} 
         
                	</tbody>
                </table>)
    }


}

        	