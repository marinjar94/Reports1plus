import React from 'react';
import HeaderContainer from './headercontainer.jsx';
import RowContainer from './rowcontainer.jsx';


export default class Table extends React.Component {
   constructor() {
        super();     
	
    }
        render() {

console.log(salesOrders);
console.log(salesOrders[0] );
        return(
        	<table>
        <thead>

		</thead>
                	<tbody>
                		{
		
                			salesOrders.map(function(value){
        				return  <RowContainer key={value.id} data={value}/>
                		
                		        		})
      
	        		} 
         
                	</tbody>
                </table>)
    }


}

        	