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


this.state={date1: "", date2:"", account:"",assigned:"",recordArray:this.props.unfiltered};
this.filterObjArray = this.filterObjArray.bind(this);
this.setfilter = this.setfilter.bind(this);
}



filterObjArray(){

        if(this.state.date1===""){
            return this.props.unfiltered;
        }

        var newArray= this.props.unfiltered.filter(function(value){

            var correctedDate= new Date(value.date).toISOString();
             var correctedDate1= new Date(this.state.date1).toISOString();
             var correctedDate2= new Date(this.state.date2==""?new Date():this.state.date2).toISOString();
            var conditionArray=[];


             if(this.state.date1!==""){conditionArray.push((correctedDate>=correctedDate1)? true:false);}
           if(this.state.date2!==""){conditionArray.push((correctedDate<=correctedDate2)? true:false);} 
            if(this.state.account!==""){ conditionArray.push((this.state.account===value.account)? true:false);}
            if(this.state.assigned!==""){ conditionArray.push((this.state.assigned===value.assigned)? true:false);}
                  
                  console.log(conditionArray);
                    return  conditionArray.every(function(condition){ return condition; });

        },this);

return newArray;
}


setfilter(value){
    this.setState(value, function(){
        //console.log(this.state.account);

        this.setState({recordArray:this.filterObjArray()}, function(){

            console.log(this.state.recordArray);
        });
        
    });

}

    render() {

//Despues meto cada style como el style de row en custom.css zzZZzzz
        return <div className="container-responsive">
                 <div className="row" style={{margin:"15px"}} >
                    <div className="col-md-4"><Input className="datepicker" filter={"From"} id={"date1"} setfilter={this.setfilter}/></div>
                     <div className="col-md-4"><Input className="datepicker" filter={"To"} id={"date2"} setfilter={this.setfilter}/></div>
                 </div>
                 <div className="row" style={{margin:"15px"}}>
                    <div className="col-md-4"><Picklist filter={"Account"} id={"account"} setfilter={this.setfilter} picklistdata={this.state.recordArray}/></div>
                    <div className="col-md-4"><Picklist filter={"Assigned To"} id={"assigned"} setfilter={this.setfilter} picklistdata={this.state.recordArray} />    </div> 
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
