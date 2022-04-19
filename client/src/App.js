import './App.css';
import React from 'react';
import App1 from './components/component1.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <App1/>
      </div>
    );
  }
}

export default App