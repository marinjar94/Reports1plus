import React from 'react';
 
export default class Input extends React.Component {
   constructor(props) {
        super(props);
        //en este console log si me sale que tiene id
console.log("my id is "+ this.props.id);    
    }


    
    render() {
        return (
            <input type="text" id={this.props.id} onChange={console.log("yey")} onBlur={this.props.blurHandler} ></input>
            )
    }


}