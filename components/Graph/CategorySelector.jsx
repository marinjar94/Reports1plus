import React from 'react';
import Option from './option.jsx';

const CategorySelector = ({ categories, changeHandler, id}) => {
var optionsArray = [];
for(var key in this.props.categories){
//optionsArray.push(this.salesOrdersNames[key]);
  if(key!="amount" && key!="date"){
    optionsArray.push([key, categories[key]]);
  }
}

const renderedOptions = optionsArray.map((value,index) =>
  (<Option key={value+" "+index} value={value[0]}>
    {value[1]}
  </Option>)
);

  return (
    <select className="form-control" id={id} onChange={changeHandler}>
      {renderedOptions}
    </select>
  );
};

CategorySelector.displayName = 'CategorySelector';

export default CategorySelector;
