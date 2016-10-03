import React from 'react';
 
export default class Option extends React.Component {
   constructor() {
        super();
    }

    render() {

    	
        return (<option >
                {this.props.value}
                </option>)
    }


}