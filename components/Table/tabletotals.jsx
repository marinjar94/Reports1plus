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
<td>Total</td>
<td>Page</td>
<td>Accumulated</td>
</tr>
		</thead>
                	<tbody >
                	<Row ObjectArray={this.props.rowdata}/>
         
                	</tbody>
                </table>)
    }

}