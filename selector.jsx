import React from 'react';
import ReactDOM from 'react-dom';
import Reports from './report.jsx'



class Selector extends React.Component{
constructor(props) { 
        super(props);
}

handleOnClick(event){
if(event.target.id=="sales"){
    return <Reports unfilteredRecordsArray={salesOrders} recordTitles={salesOrdersNames} title={"Sales Analytical Report"}/>}
if(event.target.id=="products"){
    return <Reports unfilteredRecordsArray={salesOrders} recordTitles={salesOrdersNames} title={"Product Analytical Report"}/>
}
}
render(){
   return ( <div>
<button className="btn btn-success" id="sales" onClick={this.handleOnClick}></button>
<button className="btn btn-success" id="products" onClick={this.handleOnClick}></button>
</div>)
}

}