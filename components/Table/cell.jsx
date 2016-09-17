import React from 'react';
 
export default class Cell extends React.Component {
   constructor() {
        super();
        
    }
    
    /*
    	A los tags (no a los componentes) se les puede pasar propiedades que corresponden con sus propiedades normales de HTML,
    	como en este caso "style". Sin embargo, para style, vamos a pasar un objeto con los nombres de la propiedad css
    	como los nombres de las propiedad del objeto, y cada uno con el string del valor que pondríamos normalmente.

    	Los nombres de las propiedades van en camelCase, y se puede encontrar la lista completa para cada tag en la documentación de React
    	 */
    render() {

    	
        return (<td style={{border:"0.5px solid black", margin:"0px"}}>
        
                
                {this.props.cellNumber}
                </td>)
    }


}