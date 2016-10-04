import React from 'react';
import Table from './table.jsx';
import TableTotals from './tabletotals.jsx';
import Controls from './controls.jsx';


export default class TableContainer extends React.Component {
   constructor(props) {
        super(props);

this.state={page:2,pagination:2,length:this.props.rowdata.length};
this.totalamount=this.totalamount.bind(this);
this.totalsingle=this.totalsingle.bind(this);
this.totalaccumulated=this.totalaccumulated.bind(this);
this.pageinc=this.pageinc.bind(this);    
this.paginationChange=this.paginationChange.bind(this);
}   

totalamount(){

var total=0;	
return this.props.rowdata.map(function(value){
    var id="amount";
    for (var objectprop in value){
        if(objectprop==id ){
        total=total+parseInt(value[objectprop]);}
        console.log("total"+total);
} 

        				return  total;})


}

totalaccumulated(){

var totalac=0;
var counter=this.state.page*this.state.pagination;
var rowdatasliced=this.props.rowdata.slice(0,counter);
return rowdatasliced.map(function(value){
    var id="amount";
    for (var objectprop in value){
        if(objectprop==id ){
        totalac=totalac+parseInt(value[objectprop]);}
        console.log("Acc"+total);
} 

        				return  totala;})

}

totalsingle(){

var totals=0;
var counter=this.state.page*this.state.pagination;
var rowdatasliced=this.props.rowdata.slice(counter-this.state.pagination,counter);
return rowdatasliced.map(function(value){
    var id="amount";
    for (var objectprop in value){
        if(objectprop==id ){
        totals=totals+parseInt(value[objectprop]);}
        console.log("single"+total);
} 

        				return  totals;})
                        

}

pageinc(event){
    if(event.target.id=="+"){

    this.setState(function(previousState, currentProps) {
        return {page: previousState.page + 1};
        });
        if (this.state.page==Math.ceil(this.state.length/this.state.pagination)){
            this.setState(function(currentProps) {
            return {page: Math.ceil(this.state.length/this.state.pagination)};
            });
    }
console.log("increased" +this.state.page);
}else{
 this.setState(function(previousState, currentProps) {
  return {page: previousState.page - 1};
});
  if (this.state.page==1){
     this.setState(function(currentProps) {
  return {page: 1};
});
      console.log("no te pases manito" + this.state.page);
  }
    console.log("Decreased" +this.state.page);
}

}

paginationChange(event){

    this.setState(function() {
        return {pagination: event.target.value};
        });
        if (this.state.pagination>this.state.length){
            this.setState(function() {
            return {pagination:this.state.length};
            });
    }
console.log(this.state.pagination);
}

componentWillReceiveProps(){

    this.setState(function(){return{length:this.props.rowdata.length}})
   
}

        render() {
            return (<div>
            
           <div> <Controls page={this.state.page} pageinc={this.pageinc} pagination={this.state.pagination} paginationChange={this.paginationChange}/> paginationtotal={this.state.length} </div>
        <div> <Table className={this.props.className} hrow={this.props.hrow} rowdata={this.props.rowdata}/></div>
            <div><TableTotals className={this.props.className} rowdata={[this.totalacc,this.totalamount,this.totalsingle]} /></div>
            </div>)
    }

}