import React from 'react';
import Option from './option.jsx';
 
export default class Picklist extends React.Component {
   constructor(props) {
        super(props);
this.blurHandler=this.blurHandler.bind(this); 
    }

blurHandler(event){
 this.props.setfilter({[event.target.id] : event.target.value });
}




    render() {


var PickListArray=[''];
//hice id = this.props.id no queria agarrar asi que yolo
var id=this.props.id;
this.props.picklistdata.map(function(value){
							
    for (var objectprop in value){
        //aqui quiero hacer (objectprop==id && PickListArray.indexOf(value[objectprop])!=-1) es decir
        //que si el el objectprop es igual al id del picklist(account o assigned) y si no lo encontro dentro del PickListArray
        //lo pushee dentro(es decir[Arturo,Antonio] si busca Michelle el resultado del indexof es -1 y luego lo pushea in y quedaria[Arturo,Antonio,Michelle])
        if(objectprop==id && PickListArray.indexOf(value[objectprop])==-1){
                    PickListArray.push(value[objectprop]);}
} 

        				return  null
                		
                		        		})
console.log(PickListArray);                                    

//Dentro del select esta una opción de map del array 
        return (
            <div ><span>{this.props.filter} :  
           <select className="form-control" id={this.props.id} onChange={this.blurHandler}>{

PickListArray.map(function(value){
    return <Option value={value}/>
})

}
</select>
</span>
</div>
            )
    }


}