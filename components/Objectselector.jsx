import React from 'react';

class ObjectSelector extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ObjectSelector';
    }
    render() {
        return <div>
	<button className="btn btn-sucess" id="sales" onClick={this.props.handleOnClick}>SALES</button>
	<button className="btn btn-sucess" id="products" onClick={this.props.handleOnClick}>PRODUCTS</button>
	</div>
    }
}

export default ObjectSelector;
