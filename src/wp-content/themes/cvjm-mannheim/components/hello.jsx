import React from 'react';
import ReactDOM from 'react-dom'
 
class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

ReactDOM.render(<Hello name="Olli"/>, document.getElementById('hello'));