import React from 'react';
import Graph from './graph.jsx'

export default class GraphContainer extends React.Component {
   constructor() {
        super();
    }
    


    render() {


    	var categories=[];
//hice id = this.props.id no queria agarrar asi que yolo
var id=this.props.id;
this.props.data.map(function(value){
							
    for (var objectprop in value){
        if(objectprop==id && categories.indexOf(value[objectprop])==-1){
                    categories.push(value[objectprop]);}
} 

        				return  null
                		
                		        		});  


    		var seriesData=categories.map(category=>{

    				return this.props.data.filter(value=>{

    				return value.account===category}).map(el=>el.amount).reduce((prev,next)=>{
    							
    					return parseInt(prev)+parseInt(next);
    				}, 0);

    		});

var series=[{name:"Values", data:seriesData}];

        return ( <Graph series={series} categories={categories}/>)
    }
}