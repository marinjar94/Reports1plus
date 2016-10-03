import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/Graph/graph.jsx';
import TableContainer from './components/Table/tablecontainer.jsx';
import Input from './components/Filter/input.jsx';
import Picklist from './components/Filter/picklist.jsx';


class Reports extends React.Component {

    constructor(props) { 
        super(props);
var currentTime = new Date();


this.state={date1: "", date2:"", account:"",assigned:"", WorkflowStatus:"",recordArray:this.props.unfiltered};
this.filterObjArray = this.filterObjArray.bind(this);
this.setfilter = this.setfilter.bind(this);
}



filterObjArray(){

        if(this.state.date1==="" && this.state.date2==="" && this.state.account==="" && this.state.assigned==="" && this.state.WorkflowStatus==="" ){
            console.log("no filters!");
            return this.props.unfiltered;
        }

        var newArray= this.props.unfiltered.filter(function(value){

            var correctedDate= new Date(value.date).toISOString();
            var conditionArray=[];


             if(this.state.date1!==""){conditionArray.push((correctedDate>=(new Date(this.state.date1).toISOString()))? true:false);}
           if(this.state.date2!==""){conditionArray.push((correctedDate<=(new Date(this.state.date2).toISOString()))? true:false);} 
            if(this.state.account!==""){ conditionArray.push((this.state.account===value.account)? true:false);}
            if(this.state.assigned!==""){ conditionArray.push((this.state.assigned===value.assigned)? true:false);}
             if(this.state.WorkflowStatus!==""){ conditionArray.push((this.state.WorkflowStatus===value.WorkflowStatus)? true:false);}
                  
                  console.log(conditionArray);
                    return  conditionArray.every(function(condition){ return condition; });

        },this);

return newArray;
}


setfilter(value){
    this.setState(value, function(){

        this.setState({recordArray:this.filterObjArray()}, function(){

            console.log(this.state.recordArray);
        });
        
    });

}

    render() {

        return <div className="container-responsive">
                 <div className="row" style={{margin:"15px"}} >
                    <div className="col-md-4"><Input className="datepicker" filter={"From"} id={"date1"} setfilter={this.setfilter}/></div>
                     <div className="col-md-4"><Input className="datepicker" filter={"To"} id={"date2"} setfilter={this.setfilter}/></div>
                 </div>
                 <div className="row" style={{margin:"15px"}}>
                    <div className="col-md-2"><Picklist filter={"Account"} id={"account"} setfilter={this.setfilter} picklistdata={this.state.recordArray}/></div>
                    <div className="col-md-2"><Picklist filter={"Assigned To"} id={"assigned"} setfilter={this.setfilter} picklistdata={this.state.recordArray} /></div> 
                    <div className="col-md-2"><Picklist filter={"Status"} id={"WorkflowStatus"} setfilter={this.setfilter} picklistdata={this.state.recordArray} /></div>
                 
                 </div>
                <div className="col-lg-12" style={{margin:"15px"}}>
                    <TableContainer className="table-hover table-striped table-bordered" hrow={salesOrdersNames} rowdata={this.state.recordArray}/>
                    </div>
      <hr/>
                 <div className="col-lg-12"><Graph/></div> 
       <hr/>
             </div>;
    }

    componentDidMount() {

     
    }
}


ReactDOM.render(<Reports unfiltered={salesOrders}/>,document.getElementById('Reports'));
