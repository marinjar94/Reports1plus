﻿import React from 'react';
import Cell from './cell.jsx';
import Row from './row.jsx';


export default class TableTotals extends React.Component {
   constructor() {
        super();     
	
    }
        render() {

        return(
            <div className="text-center">
            <h3>Totals</h3>
            <div>
        	<table style={{float:"none",margin:"0 auto",border:"5px"}} className={this.props.className} >
        <thead>
		<tr>
        <td style={{padding:"10px", margin:"10px"}}></td>
<td style={{padding:"10px", margin:"10px"}}>Page Total</td>
<td style={{padding:"10px", margin:"10px"}}>Accumulated Total</td>
<td style={{padding:"10px", margin:"10px"}}>Total</td>
</tr>
		</thead>
                	<tbody >
                	<Row ObjectArray={this.props.totalsData}>
                    Amount
                    </Row>
                   {this.props.quantityData==="empty"?null:<Row ObjectArray={this.props.quantityData}>Quantity</Row> }
                	</tbody>
                </table>
                </div>
                </div>)
    }

}