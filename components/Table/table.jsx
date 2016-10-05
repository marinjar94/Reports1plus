import React from 'react';
import HeaderContainer from './headercontainer.jsx';
import RowContainer from './rowcontainer.jsx';


export default class Table extends React.Component {
   constructor() {
        super();     
	
    }
        render() {

        return(
        	<table style={{float:"none",margin:"0 auto"}} className={this.props.className} >
        <thead>
{
<HeaderContainer names={this.props.hrow}/>
}
		</thead>
                	<tbody >
                		{
		
                			this.props.rowdata.slice(this.props.pageCounter-this.props.itemsPerPage, this.props.pageCounter).map(function(value){
							
        				return  <RowContainer key={value.id} data={value}/>
                		
                		        		})
      
	        		} 
         
                	</tbody>
                </table>)
    }

}