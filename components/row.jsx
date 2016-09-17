import React from 'react';
import ReactDOM from 'react-dom';
import Cell from 'cell.jsx';

class Row extends React.Component {
  render() {
    
    return <div><tr><div id="cell"></div>
    <div id="cell"></div>
    <div id="cell"></div></tr></div>
  }
}
 
ReactDOM.render(<Row/>, document.getElementById('row'));