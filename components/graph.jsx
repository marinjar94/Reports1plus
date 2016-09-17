import React from 'react';
import ReactDOM from 'react-dom';
 
class Graph extends React.Component {
  render() {
    return <h1>This should be a graph</h1>
  }
}
 
ReactDOM.render(<Graph/>, document.getElementById('graph'));
