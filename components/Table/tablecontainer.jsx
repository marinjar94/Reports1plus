﻿import React from 'react';
import Table from './table.jsx';


export default class TableContainer extends React.Component {
   constructor() {
        super();
	
    }   
        render() {
            
            return <Table hrow={this.props.hrow} rowdata={this.props.rowdata}/>
    }


}

