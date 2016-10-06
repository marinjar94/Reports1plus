import React from 'react';
import ReactDOM from 'react-dom';
import Reports from './reports.jsx'
import Objectselector from './components/Objectselector.jsx';


class Selector extends React.Component{
constructor(props) { 
        super(props);

        this.state={actualObject:""};
        this.changeObjectOnClick=this.changeObjectOnClick.bind(this);
}

changeObjectOnClick(event){

this.setState({actualObject:event.target.id});

}

render(){

	//var estructuraAUsar=this.props.objectsStructure[this.state.actualObject];

   return ( <div>
   	{this.state.actualObject!=""?<Reports unfilteredRecordsArray={this.props.objectsStructure} recordTitles={salesOrdersNames} title={"Sales Analytical Report"} extrafilter={"Status"} extrafilterid={"WorkflowStatus"}/> : <Objectselector handleOnClick={this.changeObjectOnClick}/> }
</div>)
}

}

ReactDOM.render(<Selector objectsStructure={salesOrders}/>,document.getElementById('Selector'));

if (module.hot) {
  module.hot.accept();
}
