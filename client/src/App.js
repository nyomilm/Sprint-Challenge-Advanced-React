import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayerCard from './components/PlayerCard';
import './App.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      players: []
    }
  }
    
  

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(players => this.setState({ players: players}))
      .catch(err => console.log("nooo: ", err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.players !== this.state.players) {
      console.log("index.js: App: CDU");
      fetch("http://localhost:5000/api/player")
        .then(res => res.json())
        .then(players => this.setState({ playersText: "", players: players.message }))
        .catch(err => console.log("nooo: ", err));
    }
  }


  handleChange = event => {
    this.setState({ playersText: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    fetch("http://localhost:5000/api/${this.state.playerText}/player")
      .then(res => res.json())
      .then(players => this.setState({ players: players.message }))
      .catch(err => console.log("nooo: ", err));
  };


  render() {
    console.log(this.state.players)
    return(
      
<div className="App">
      <input
        name="text"
        value={this.state.playersText}
        onChange={this.handleChange}
      />

        <button data-testid="player-card" onClick={this.handleClick}>fetch players</button>
        <div className="players">
          {this.state.players.map(player => (
            <PlayerCard      player={player} key={player.id} />

          ))}

        </div>
 
    </div>

    )
    

  

}
}










export default App;
