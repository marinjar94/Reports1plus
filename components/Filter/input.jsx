import React from 'react';
 
export default class Input extends React.Component {
   constructor() {
        super();
        
    }
    render() {

    	
        return (
            <input type="text" onChange={console.log("yey")} ></input>
            )
    }


}