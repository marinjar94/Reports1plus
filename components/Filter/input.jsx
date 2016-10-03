import React from 'react';
 
export default class Input extends React.Component {
   constructor(props) {
        super(props);

this.changeHandler=this.changeHandler.bind(this); 
    }

changeHandler(target){
 this.props.setfilter({[target.id] : target.value});
}

    render() {
      
        return (
            
 <span>{this.props.filter}(Year): <input ref={(ref) => this.myTextInput = ref} className={this.props.className} type="text" id={this.props.id}></input></span>
            )
    }

    componentDidMount() {
     
     /*When this input component is mounted, it will bind
	initiate the kendoDatePicker to the corresponding input, and it will also
	bind the changeHandler to the kendo datepicker change event.

	Notice a reference to the input component was needed ( ref={(ref) => this.myTextInput = ref} )
	and this helped use the correct context for the datepicker, and allowed us to use
	textInput.id and textInput.value in the handler function;
     */
    let inputComponent=this;
	let textInput= this.myTextInput;

	$(textInput).kendoDatePicker({
   		 change: function() {

    	inputComponent.changeHandler(textInput);
    }
});     
    }


}