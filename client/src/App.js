import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response)
      this.setState({ data: response.data })
    })
    .catch(error => console.log(error))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}
}
export default App;
