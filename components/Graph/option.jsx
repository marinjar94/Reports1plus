import React from 'react';
 
export default class Option extends React.Component {
   constructor() {
        super();
    }

    render() {

    	
        return (<option className="text-center" value={this.props.value}>
                {this.props.children}
                </option>)
    }


}