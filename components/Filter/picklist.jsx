import React from 'react';
 
export default class Picklist extends React.Component {
   constructor(props) {
        super(props);

this.blurHandler=this.blurHandler.bind(this); 
    }

blurHandler(event){
console.log({[event.target.id] : event.target.value });
 this.props.setfilter({[event.target.id] : event.target.value });
 console.log(event.target.id);
}
    render() {

        return (
            <div ><span>{this.props.filter} :  
           <select className="form-control" id={this.props.id} onChange={this.blurHandler}>
<option value=""></option>
  <option  value="Cocacola">Cocacola</option>
  <option  value="Pepsi">Pepsi</option>
  <option  value="Los Andes">Los Andes</option>
  <option value="Texas">Texas</option>
</select>
</span>
</div>
            )
    }


}