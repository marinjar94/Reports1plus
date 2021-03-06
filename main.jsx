import React from 'react';
import ReactDOM from 'react-dom';
import Reports from './reports.jsx'
import Objectselector from './components/Objectselector.jsx';


class Selector extends React.Component{
  constructor(props) { 
    super(props);
    this.state={actualObject:""};
    this.changeObjectOnClick=this.changeObjectOnClick.bind(this);
    this.resetState=this.resetState.bind(this);
  }

changeObjectOnClick(event){
  this.setState({actualObject:event.target.id});
}

resetState(){
  this.setState({actualObject:""});
}

render(){
if(this.state.actualObject === '') {
  return <Objectselector handleOnClick={this.changeObjectOnClick}/>;
}

  var currentStructure=this.props.objectsStructure[this.state.actualObject];
  var recordArray=currentStructure.records;
  var recordTitles=currentStructure.names;

  return (
    <div>
      <button onClick={this.resetState} className="btn btn-primary">
        <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
      </button>
    <Reports
    key={this.state.actualObject}
    unfilteredRecordsArray={recordArray}
    recordTitles={recordTitles}
    title={this.state.actualObject}
    extrafilter={this.state.actualObject==="sales"?"Status":"Product"}
    extrafilterid={this.state.actualObject==="sales"?"WorkflowStatus":"product"}/>
</div>)
}

}

ReactDOM.render(<Selector objectsStructure={objectsStructure}/>,document.getElementById('Selector'));

if (module.hot) {
  module.hot.accept();
}
