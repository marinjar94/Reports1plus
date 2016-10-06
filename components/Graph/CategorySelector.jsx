import React from 'react';
import Option from './option.jsx';
class CategorySelector extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CategorySelector';

    }


    render() {

var optionsArray=[];
for(var key in this.props.categories){
	//optionsArray.push(this.salesOrdersNames[key]);
	if(key!="amount" && key!="date"){
		optionsArray.push([key,this.props.categories[key]]);
	}
}


        return <select className="form-control" id={this.props.id} onChange={this.props.changeHandler}>
        
        {
        optionsArray.map(function(value,index){
            return <Option key={value+" "+index} value={value[0]}>
            {value[1]}
            </Option>
        })
        
        }
        </select>

    }
}

export default CategorySelector;
