import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import './App.css';
import PlayerInfo from "./PlayerInfo";
import Nav from './Nav';



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
      <Nav />
        {this.state.data.map(player => (
          <PlayerInfo 
          name={player.name}
          country={player.country}
          searches={player.searches} />
        ))}
    </div>
  );
}
}
export default App;
