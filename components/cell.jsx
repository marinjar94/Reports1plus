import React from 'react';
import ReactDOM from 'react-dom';
 
class Cell extends React.Component {
  render() {
    
    return <td>Never GONNA GIVE YOU UP</td>
  }
}
 
ReactDOM.render(<Cell/>, document.getElementById('cell'));