import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'row.jsx';


class TableReport extends React.Component {
  render() {
    
    return <div>
    <table>
    <div id="row"></div>
    <div id="row"></div>
    <div id="row"></div>
    </table></div>
  }
}
 
ReactDOM.render(<TableReport/>, document.getElementById('tablereport'));