import React from 'react';
 
export default class Input extends React.Component {
   constructor(props) {
        super(props);

this.blurHandler=this.blurHandler.bind(this); 
    }

blurHandler(event){
    
 this.props.setfilter({[event.target.id] : event.target.value });
}
    render() {
      
        return (
            
 <span>{this.props.filter}(Year): <input className={this.props.className} type="text" id={this.props.id} onBlur={this.blurHandler} ></input></span>
            )
    }


}