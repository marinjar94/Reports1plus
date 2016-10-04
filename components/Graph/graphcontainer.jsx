import React from 'react';
import Graph from './graph.jsx';
import CategorySelector from './CategorySelector.jsx';

export default class GraphContainer extends React.Component {
   constructor() {
        super();

        this.state={id:"account"};
        this.changeCategories=this.changeCategories.bind(this);
    }
    



    changeCategories(event){

        this.setState({id:event.target.value});

    }

    render() {


    	var categories=[];
var id=this.state.id;
this.props.data.map(function(value){
							
    for (var objectprop in value){
        if(objectprop==id && categories.indexOf(value[objectprop])==-1){
                    categories.push(value[objectprop]);}
} 
				return  null
});  


    		var seriesData=categories.map(category=>{

    				return this.props.data.filter(value=>{

    				return value[id]===category}).map(el=>el.amount).reduce((prev,next)=>{
    							
    					return parseInt(prev)+parseInt(next);
    				}, 0);

    		});

var series=[{name:"Values", data:seriesData}];

        return (<div>
            <Graph series={series} categories={categories}/>
            <CategorySelector id={"CategorySelector"} changeHandler={this.changeCategories}/>
            </div>)
    }
}