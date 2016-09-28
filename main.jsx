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

//recordArray está renderizando toda la lista en el primer mount. A partir del primer "onBlur"
//de algún filtro es cuando se utiliza filterObjArray() para filtrar, así que hay que ver
//si deseamos que eso permanezca así o forzamos de alguna manera.

//Hay que recordar que antes de mostrar cualquier cosa, el usuario debe iniciar todo cambiando el date1,
//que es el "desde" del que hablaba Manuel Sandoval
this.state={date1: currentTime-1, date2:"", account:"",assigned:"",recordArray:this.props.unfiltered};
this.filterObjArray = this.filterObjArray.bind(this);
this.setfilter = this.setfilter.bind(this);
}



filterObjArray(){

        var newArray= this.props.unfiltered.filter(function(value){

            var correctedDate= new Date(value.date).getFullYear();
            var conditionArray=[];

            conditionArray.push((correctedDate>=this.state.date1? true:false));
           if(this.state.date2!==""){ conditionArray.push((correctedDate<=this.state.date2)? true:false);} 
            if(this.state.account!==""){ conditionArray.push((this.state.account==value.account)? true:false);}
            if(this.state.assigned!==""){ conditionArray.push((this.state.assigned==value.assigned)? true:false);}
                   
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

//Despues meto cada style como el style de row en custom.css zzZZzzz
        return <div className="container-responsive">
                 <div className="row" style={{margin:"15px"}} >
                    <div className="col-md-4"><Input className="datepicker" filter={"From"} id={"date1"} setfilter={this.setfilter}/></div>
                     <div className="col-md-4"><Input className="datepicker" filter={"To"} id={"date2"} setfilter={this.setfilter}/></div>
                 </div>
                 <div className="row" style={{margin:"15px"}}>
                    <div className="col-md-4"><Picklist filter={"Account"}id={"account"} setfilter={this.setfilter}/></div>
                    <div className="col-md-4"><Picklist filter={"Assigned To"} id={"assigned"} setfilter={this.setfilter} />    </div> 
                 </div>
                <div className="col-lg-12" style={{margin:"15px"}}>
                    <TableContainer className="table-hover table-striped table-bordered" hrow={salesOrdersNames} rowdata={this.state.recordArray}/>
                    </div>
      <hr/>
                 <div className="col-lg-12"><Graph/></div> 
       <hr/>
             </div>;
    }
}


ReactDOM.render(<Reports unfiltered={salesOrders}/>,document.getElementById('Reports'));
