import React from 'react';
import Table from './table.jsx';
import Controls from './controls.jsx';


export default class TableContainer extends React.Component {
   constructor(props) {
        super(props);
	this.state={page:2,pagination:2};
this.totalamount=this.totalamount.bind(this);
this.totalsingle=this.totalsingle.bind(this);
this.totalaccumulated=this.totalaccumulated.bind(this);
this.pageinc=this.pageinc.bind(this);    
}   

totalamount(){

var total=0;	
this.props.rowdata.map(function(value){
    var id="amount";
    for (var objectprop in value){
        if(objectprop==id ){
        total=total+parseInt(value[objectprop]);}
        console.log("total"+total);
} 

        				return  total;})


}

totalaccumulated(){

var total=0;
var counter=this.state.page*this.state.pagination;
var rowdatasliced=this.props.rowdata.slice(0,counter);
rowdatasliced.map(function(value){
    var id="amount";
    for (var objectprop in value){
        if(objectprop==id ){
        total=total+parseInt(value[objectprop]);}
        console.log("Acc"+total);
} 

        				return  total;})

}

totalsingle(){

var total=0;
var counter=this.state.page*this.state.pagination;
var rowdatasliced=this.props.rowdata.slice(counter-this.state.pagination,counter);
rowdatasliced.map(function(value){
    var id="amount";
    for (var objectprop in value){
        if(objectprop==id ){
        total=total+parseInt(value[objectprop]);}
        console.log("single"+total);
} 

        				return  total;})
                        

}

pageinc(event){
if(event.target.id=="+"){
this.state.page++;
console.log("increased" +this.state.page);
}else{
  this.state.page--;
  if (this.state.page==0){
      this.state.page=1;
      console.log("no te pases manito" + this.state.page);
  }
    console.log("Decreased" +this.state.page);
}

}

        render() {
            
            return (<div>
            
           {//<Controls page={this.state.page} pageinc={this.pageinc} pagination={this.state.pagination}/>
       }
            <Table className={this.props.className} hrow={this.props.hrow} rowdata={this.props.rowdata}/>
            
            </div>)
    }


}

