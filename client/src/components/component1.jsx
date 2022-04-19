import React from 'react';
import axios from 'axios';

class App1 extends React.Component {
  handleClick() {
    axios.get('../../server/app/api')
    console.log('this is:');
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>
          Ready... Set... CHORE!
        </p>
        <button onClick={() => this.handleClick()}>Connection Test</button>
      </header>
    </div>
    );
  }
}

export default App1;
