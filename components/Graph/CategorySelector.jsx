import React from 'react';
import Option from './option.jsx';
class CategorySelector extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CategorySelector';
        this.salesOrdersNames={id:"RIF",
date:"DATE",
amount:"AMOUNT",
account:"ACCOUNT",
assigned:"ASSIGNED TO",
WorkflowStatus:"STATUS",
daterequest:"REQUESTED AT",
datedispatch:"DISPATCHED AT",
datedelivery:"DELIVERED AT",
datebill:"BILLED AT",
invoice:"INVOICE N°"
};

    }


    render() {

var optionsArray=[];
for(var key in this.salesOrdersNames){
	//optionsArray.push(this.salesOrdersNames[key]);
	if(key!="amount"){
		optionsArray.push([key,this.salesOrdersNames[key]]);
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
