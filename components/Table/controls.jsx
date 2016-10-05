import React from 'react';
 
export default class Controls extends React.Component {
   constructor() {
        super();
    }

    render() {

    	
        return (<div className="row">
        <div className="col-md-1">
        <button className="btn" onClick={this.props.pageinc}>{"<<"}</button>
        </div>
        <div className="col-md-2 text-center">
        <h6>Page {this.props.currentPage}</h6>
        </div>
            <div className="col-md-1"><button className="btn"  id="+" onClick={this.props.pageinc} >{">>"}</button></div>
           <div className="col-md-4"><h6>Showing records {this.props.recordsPerPage*this.props.currentPage-this.props.recordsPerPage+1} to {this.props.numberOfRecords<(this.props.recordsPerPage*this.props.currentPage)?this.props.numberOfRecords:(this.props.recordsPerPage*this.props.currentPage)} of {this.props.numberOfRecords}</h6> </div>
            
            </div>)
    }


}