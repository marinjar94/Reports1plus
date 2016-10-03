import React from 'react';
import Table from './table.jsx';


export default class TableContainer extends React.Component {
   constructor(props) {
        super(props);
	
    }   
        render() {
            
            return <Table className={this.props.className} hrow={this.props.hrow} rowdata={this.props.rowdata}/>
    }


}

