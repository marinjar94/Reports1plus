﻿import React from 'react';
import ReactDOM from 'react-dom';
import GraphContainer from './components/Graph/graphcontainer.jsx';
import TableContainer from './components/Table/tablecontainer.jsx';
import Input from './components/Filter/input.jsx';
import Picklist from './components/Filter/picklist.jsx';


export default class Reports extends React.Component {
  constructor(props) { 
    super(props);
    const currentTime = new Date().toISOString();


    this.state={date1: "", date2:currentTime, account:"",assigned:"", WorkflowStatus:"",product:""};
    this.filterObjArray = this.filterObjArray.bind(this);
    this.setfilter = this.setfilter.bind(this);
  }

  filterObjArray(){
    const blankFilters =  Object.keys(this.state).reduce((acc, filterName) => {
      acc && this.state[filterName] === '';
    }, true);

    if(blankFilters){
      console.log("no filters!");
      return this.props.unfilteredRecordsArray;
    }

    var newArray = this.props.unfilteredRecordsArray.filter((value) => {
        var correctedDate= new Date(value.date).toISOString();
        var conditionArray=[];

          if(this.state.date1!=="" && this.state.date1!==null){conditionArray.push((correctedDate>=(new Date(this.state.date1).toISOString()))? true:false);}
        if(this.state.date2!=="" && this.state.date1!==null){conditionArray.push((correctedDate<=(new Date(this.state.date2).toISOString()))? true:false);} 
        if(this.state.account!=="" && this.state.date1!==null){ conditionArray.push((this.state.account===value.account)? true:false);}
        if(this.state.assigned!=="" && this.state.date1!==null){ conditionArray.push((this.state.assigned===value.assigned)? true:false);}
          if(this.state.WorkflowStatus!=="" && this.state.date1!==null){ conditionArray.push((this.state.WorkflowStatus===value.WorkflowStatus)? true:false);}
          if(this.state.product!=="" && this.state.date1!==null){ conditionArray.push((this.state.product===value.product)? true:false);}   
                return  conditionArray.every(function(condition){ return condition; });

    });

    return newArray;
  }

  setfilter(value){
      this.setState(value);
  }

  render() {

    const recordArray = this.filterObjArray();
    return (
        <div className="container-fluid">
          <h1 style={{margin:"10px"}}>
            <b>{this.props.title+" Analytical Report"}</b>
          </h1>
          <div className="row" style={{margin:"15px"}}>
            <div className="col-md-12 col-xs-12 text-center">
              <h3>Filter report data by</h3>
            </div>
            <div className="col-md-2 col-xs-12" >
              <Input className="datepicker" filter={"From"} id={"date1"} setfilter={this.setfilter}/>
            </div>
            <div className="col-md-2 col-xs-12">
              <Input className="datepicker" filter={"To"} id={"date2"} setfilter={this.setfilter}/>
            </div>
            <div className="col-md-1 col-xs-12">
              <Picklist filter={"Account"} id={"account"} setfilter={this.setfilter} picklistdata={recordArray}/>
            </div>
            <div className="col-md-1 col-xs-12">
              <Picklist filter={"Assigned"} id={"assigned"} setfilter={this.setfilter} picklistdata={recordArray} />
            </div> 
            <div className="col-md-1 col-xs-12">
              <Picklist filter={this.props.extrafilter} id={this.props.extrafilterid} setfilter={this.setfilter} picklistdata={recordArray} />
            </div>
          </div>
          <hr/>
          <div className="row" style={{margin:"15px"}}>
            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3">
              <GraphContainer data={recordArray} object={this.props.title} categories={this.props.recordTitles}/>
            </div> 
          </div>
          <hr/>
          <div className="row" style={{margin:"15px"}}>
            <div className="col-md-12 col-xs-12 text-center" style={{margin:"15px"}}>
              <TableContainer className="table-hover table-striped table-bordered" hrow={this.props.recordTitles} rowdata={recordArray} object={this.props.title}/>
            </div>
          </div>
          <hr/>
        </div>
      );
  }
}