import React from 'react';

class ObjectSelector extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ObjectSelector';
    }
    render() {
        return <div><div className="text-center"style={{margin:"15px"}}>
	<button className="btn btn-sucess" id="sales" onClick={this.props.handleOnClick}>SALES ANALYTICAL REPORTS</button></div>
	<div className="text-center"style={{margin:"15px"}}><button className="btn btn-sucess" id="products" onClick={this.props.handleOnClick}>PRODUCTS ANALYTICAL REPORTS</button></div>
	</div>
    }
}

export default ObjectSelector;
