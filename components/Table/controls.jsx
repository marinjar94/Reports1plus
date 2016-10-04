import React from 'react';
 
export default class Controls extends React.Component {
   constructor() {
        super();
    }

    render() {

    	
        return (<div className="row">
        <div className="col md 3">
        <button id="+" onClick={this.props.pageinc} >Increase +</button>
        </div>
        <div className="col md 3">
        <h6>{this.props.page}</h6>
        </div>
            <div className="col md 3"><button onClick={this.props.pageinc} >Decrease -</button></div>
            <h6>Showing this amount of records: {this.props.pagination} of {this.props.paginationtotal}</h6>
            </div>)
    }


}