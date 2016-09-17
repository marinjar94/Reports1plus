import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/Graph/graph.jsx';
import Table from './components/Table/table.jsx'
/*
Primero que nada, se importó react y react-dom para poder usar react y poder usar ReactDOM.render y hacer el render

Luego, se importaron los componentes Graph y Table dese sus paths respectivos para poder ser introductidos en el componente
que vamos a utilizar de container. En este momento es Reports y está en este archivo, pero quizá cambie de lugar

 */

class Reports extends React.Component { //Reports es un React.Component

/*se coloca esta función constructor(), para que ayudados de la implementación de es6 (usar class extends React.Component) 
podamos definir cosas como el state del component sin necesidad de llamar un setState en alguna función que se ejecute
antes del ReactDOM.render. 

Se incluye la función super() para que tengamos disponible todo lo de React.Component.... creo.

*/
    constructor() { 
        super();
        /*
        En esta función constructor podemos hacer varias cosas importantes, por ahora dos notables:

        a)colocar this.functionname = this.functionname.bind(this);

        b)colocar un this.state={property:value}

        Te diré la función de ambos luego, o puedes leerlo por ahi

         */   
         }

         
    render() {

    	/*
         Ahora entramos en la función render(), aquí podemos meter los componentes que hayamos importado en este archivo.
         En este caso, estoy metiendo <Graph/> y <Table/>. Asi como está colocado se va a estructurar en el html,
         no hay que colocar divs y asignarles un id donde vamos a hacer render de cada componente en su codigo,
         sino que colocamos el componente directamente donde lo queramos y ya.
          */
        return <div>

        <Graph/> 
        <hr/>
        <Table/>
        </div>;
    }
}

//Esta es la función render() de ReactDOM. Como te dije, idealmente solo tenemos que llamar esta función una vez para el "container" component
ReactDOM.render(<Reports/>,document.getElementById('Reports'));
