import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>This is Home Page</div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
