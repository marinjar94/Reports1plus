import React from 'react';
import Option from './option.jsx';
 
export default class Picklist extends React.Component {
   constructor(props) {
        super(props);
this.changeHandler=this.changeHandler.bind(this); 
    }

changeHandler(event){
  
 this.props.setfilter({[event.target.id] : event.target.value });
}




    render() {


var PickListArray=[''];
//hice id = this.props.id no queria agarrar asi que yolo
var id=this.props.id;
this.props.picklistdata.map(function(value){
							
    for (var objectprop in value){
        if(objectprop==id && PickListArray.indexOf(value[objectprop])==-1){
                    PickListArray.push(value[objectprop]);}
} 

        				return  null
                		
                		        		})                                  
//Dentro del select esta una opción de map del array 
        return (
            <div ><span>{this.props.filter} :  
           <select className="form-control" id={this.props.id} onChange={this.changeHandler}>{

PickListArray.map(function(value){
    return <Option key={value} value={value}/>
})

}
</select>
</span>
</div>
            )
    }


}