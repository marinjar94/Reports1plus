import React from 'react';
import HeaderContainer from './headercontainer.jsx';
import RowContainer from './rowcontainer.jsx';


export default class Table extends React.Component {
   constructor() {
        super();     
	
    }
        render() {

        return(
        	<table>
        <thead>
{
<HeaderContainer names={this.props.hrow}/>
}
		</thead>
                	<tbody>
                		{
		
                			this.props.rowdata.map(function(value){
        				return  <RowContainer key={value.id} data={value}/>
                		
                		        		})
      
	        		} 
         
                	</tbody>
                </table>)
    }


}

        	