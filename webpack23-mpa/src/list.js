import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>This is List Page.</div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
