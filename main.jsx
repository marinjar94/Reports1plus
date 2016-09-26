import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/Graph/graph.jsx';
import TableContainer from './components/Table/tablecontainer.jsx';
import Input from './components/Filter/input.jsx';
import Picklist from './components/Filter/picklist.jsx';


class Reports extends React.Component { //Reports es un React.Component

    constructor(props) { 
        super(props);
var currentTime = new Date().getFullYear();
this.state={date1: currentTime-1, date2:currentTime, account:"",assigned:"",recordArray:this.props.unfiltered};
this.filterObjArray = this.filterObjArray.bind(this);
this.setfilter = this.setfilter.bind(this);
}



filterObjArray(){

        var newArray= this.props.unfiltered.filter(function(value){

            var correctedDate= new Date(value.date).getFullYear();
            var conditionArray=[];

            conditionArray.push((correctedDate>=this.state.date1? true:false));
            conditionArray.push((correctedDate<=this.state.date2)? true:false);
            if(this.state.account!=""){ conditionArray.push((this.state.account==value.account)? true:false);}
            if(this.state.assigned!=""){ conditionArray.push((this.state.assigned==value.assigned)? true:false);}
                   
                   
                    return  conditionArray.every(function(condition){ return condition; });

        },this);

return newArray;
}
 
      
setfilter(value){

    this.setState(value, function(){
        this.setState({recordArray:this.filterObjArray()});
    });
}

    render() {

//Una observación aquí: no uses <span>From <Input/></span>, haz que el componente Input incluya el span
//Para eso son los presentational components, o "dumb" components, para que hagas markup render,
//Así que tu Input es el que devolveria "<span>From  <input type="text" onChange={console.log("yey")} ></input></span>"
//Y así te evitas sobrecargar este método render de tu componente principal

        return <div>
        <span>From <Input/></span>
       <span>To<Input/></span>
        <Picklist/>
        <Picklist/>     
        <Graph/> 
        <hr/>
        <TableContainer hrow={salesOrdersNames} rowdata={this.state.recordArray}/>
        </div>;
    }
}


ReactDOM.render(<Reports unfiltered={salesOrders}/>,document.getElementById('Reports'));
