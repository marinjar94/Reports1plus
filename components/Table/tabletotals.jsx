import React from 'react';
import Cell from './cell.jsx';
import Row from './row.jsx';


export default class TableTotals extends React.Component {
   constructor() {
        super();     
	
    }
        render() {

        return(
        	<table className={this.props.className} >
        <thead>
		<tr>
<td style={{padding:"10px", margin:"10px"}}>Page Total</td>
<td style={{padding:"10px", margin:"10px"}}>Accumulated Total</td>
<td style={{padding:"10px", margin:"10px"}}>Absolute Total</td>
</tr>
		</thead>
                	<tbody >
                	<Row ObjectArray={this.props.rowdata}/>
         
                	</tbody>
                </table>)
    }

}