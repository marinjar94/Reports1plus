import React from 'react';
 
export default class Controls extends React.Component {
   constructor() {
        super();
    }

    render() {

    	
        return (<div className="row" style={{float:"none",margin:"0 auto"}}>
        <div className="col-md-2">
        <button className="btn" onClick={this.props.pageinc}>{"<<"}</button>
        </div>
        <div className="col-md-3 text-center">
        <h6>Page {this.props.currentPage} of {this.props.maxPages}</h6>
        </div>
            <div className="col-md-2"><button className="btn"  id="+" onClick={this.props.pageinc} >{">>"}</button></div>
           <div className="col-md-5"><h6>Showing records {this.props.recordsPerPage*this.props.currentPage-this.props.recordsPerPage+(this.props.numberOfRecords==0?0:1)} to {this.props.numberOfRecords<(this.props.recordsPerPage*this.props.currentPage)?this.props.numberOfRecords:(this.props.recordsPerPage*this.props.currentPage)} of {this.props.numberOfRecords}</h6> </div>
            
            </div>)
    }


}