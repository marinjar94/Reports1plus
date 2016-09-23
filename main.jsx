import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/Graph/graph.jsx';
import TableContainer from './components/Table/tablecontainer.jsx';
import Input from './components/Filter/input.jsx';
import Picklist from './components/Filter/picklist.jsx';


class Reports extends React.Component { //Reports es un React.Component

    constructor() { 
        super();

         }
         
    render() {


        return <div>
        <Input/>
        <Input/>
        <Picklist/>
        <Picklist/>     
        <Graph/> 
        <hr/>
        <TableContainer/>
        </div>;
    }
}


ReactDOM.render(<Reports/>,document.getElementById('Reports'));
