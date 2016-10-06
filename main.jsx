import React from 'react';
import ReactDOM from 'react-dom';
import Reports from './reports.jsx'



class Selector extends React.Component{
constructor(props) { 
        super(props);
}

handleOnClick(event){
if(event.target.id=="sales"){
    return ReactDOM.render(<Reports unfilteredRecordsArray={salesOrders} recordTitles={salesOrdersNames} title={"Sales Analytical Report"} extrafilter={"Status"} extrafilterid={"WorkflowStatus"}/>,document.getElementById('Reports'))}
if(event.target.id=="products"){
    return ReactDOM.render(<Reports unfilteredRecordsArray={products} recordTitles={productsNames} title={"Product Analytical Report"} extrafilter={"Product"} extrafilterid={"product"}/>,document.getElementById('Reports'))
}
}
render(){
   return ( <div>
<button className="btn btn-sucess" id="sales" onClick={this.handleOnClick}>SALES</button>
<button className="btn btn-sucess" id="products" onClick={this.handleOnClick}>PRODUCTS</button>
</div>)
}

}

ReactDOM.render(<Selector/>,document.getElementById('Selector'));

if (module.hot) {
  module.hot.accept();
}