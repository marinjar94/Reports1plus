import React from 'react';
 
export default class Input extends React.Component {
   constructor() {
        super();
        
    }
    render() {

    	/*Nota:
    	No uses functionName() en los inline html event props (onChange, onClick...) ya que no funciona
    	cuando se ejecute el evento, sino que se ejecuta inmediatamente cuando el componente es montado,
    	actualizado, o demás.
    	usa  functionName a secas, y manéjate con los argumentos dentro de la definición de la función

    	*/
        return (
            <input type="text" onChange={console.log("yey")} ></input>
            )
    }


}