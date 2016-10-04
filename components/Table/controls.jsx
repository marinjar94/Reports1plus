import React from 'react';
 
export default class Controls extends React.Component {
   constructor() {
        super();
    }

    render() {

    	
        return (<div>
        <button id="+" onClick={this.props.pageinc} >llll++</button>
       <h3>{this.props.page}</h3>
            <button onClick={this.props.pageinc} > llll++</button>
            <h3>Showing {this.props.pagination}</h3>
             <span>Amount of records to show<input type="text"></input></span></div>)
    }


}