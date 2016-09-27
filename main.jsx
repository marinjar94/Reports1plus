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
this.blurHandler= this.blurHandler.bind(this);
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


blurHandler(event){
console.log(this.state);
console.log(this.props.id);
//if(event.target.value=!this.state.date1){
    //en vez de date1, deberia ser id
    this.setState({date1:event.target.value}, function(){
        this.setState({recordArray:this.filterObjArray()});
    });
//}
     console.log(id);
    console.log(event.target.value);
    console.log(this.state);
}

setfilter(value){

    this.setState(value, function(){
        this.setState({recordArray:this.filterObjArray()});
    });
}

    render() {


        return <div>
        <Input id={"date1"} blurHandler={this.blurHandler}/>
        <Input id={"date2"} blurHandler={this.blurHandler}/>
        <Picklist/>
        <Picklist/>     
        <Graph/> 
        <hr/>
        <TableContainer hrow={salesOrdersNames} rowdata={this.state.recordArray}/>
        </div>;
    }
}


ReactDOM.render(<Reports unfiltered={salesOrders}/>,document.getElementById('Reports'));
