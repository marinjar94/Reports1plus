import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/Graph/graph.jsx';
import TableContainer from './components/Table/tablecontainer.jsx';
import Input from './components/Filter/input.jsx';
import Picklist from './components/Filter/picklist.jsx';


class Reports extends React.Component { //Reports es un React.Component

    constructor() { 
        super();
var currentTime = new Date().getFullYear();
this.state={filters:[{date1: currentTime-1,date2:currentTime,account:"",assigned:""}] };

function filterObjArray(obj){

    if (this.state.filters.account==null){
    this.state.filters.account
    }
return obj.date >=this.state.filters.date1 &&
       obj.date <=this.state.filters.date2 &&
       obj.account == this.state.filters.account &&
       obj.assigned == this.state.filters.assigned ;
 
}

}

        
setfilter(value){

    this.setState(value);
}

    render() {



        return <div>

        <span>From <Input/></span>
       <span>To<Input/></span>
        <Picklist/>
        <Picklist/>     
        <Graph/> 
        <hr/>
        <TableContainer hrow={salesOrdersNames} rowdata={this.props.unfiltered}/>
        </div>;
    }
}


ReactDOM.render(<Reports unfiltered={salesOrders}/>,document.getElementById('Reports'));
