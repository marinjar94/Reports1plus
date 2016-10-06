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
var seriesName=this.state.graphSeriesName;

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

var series=[{data:seriesData}];
var object=this.props.object;

        return (<div>
            <Graph series={series} categories={categories} object={object}/>
            <h3 className="text-center">Select Graph Category</h3>
                <CategorySelector key={object} id={"CategorySelector"} categories={this.props.categories} changeHandler={this.changeCategories}/>

            </div>)
    }
}