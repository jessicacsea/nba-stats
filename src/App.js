import React, { Component } from 'react';
import './App.css';
import NbaCalls from './assets/api/nba.js';

// my components
import Filter from './components/Filter.js';
import Player from './components/PlayerSection.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      player1Info: {
        name: '', 
        team: '',
        position: '',
        height: '',
        player_id: '',
        ast: '',
        blk: '',
        dreb: '',
        pf: '',
        oreb: '',
        pts: '',
        stl: '',
        turnover: ''
      },
      player2Info: {
        name: '', 
        team: '',
        position: '',
        height: '',
        player_id: '',
        team_id: '',
        ast: '',
        blk: '',
        dreb: '',
        pf: '',
        oreb: '',
        pts: '',
        stl: '',
        turnover: ''
      },
      buttonOff: ''
    }
  }

  getPlayer1Info = (player1) => {
    NbaCalls.getPlayers(player1).then((res) => {
      if(!res.data.length){
        alert('Please ensure both NBA player names are correct.')
      } else {
      let result = res.data;
        let data = {
          name: `${result[0].first_name} ${result[0].last_name}`, 
          team: result[0].team.name,
          position: result[0].position,
          height: `${result[0].height_feet}-${result[0].height_inches}`,
          player_id: result[0].id,
          team_id: result[0].team.id,
        }
        this.setState({
          player1Info: data
        })
      }
    })
  }
  getPlayer2Info = (player2) => {
    NbaCalls.getPlayers(player2).then((res) => {
      if(!res.data.length){
        alert('Please ensure both NBA player names are correct.')
      } else {
      let result = res.data;
        let data = {
          name: `${result[0].first_name} ${result[0].last_name}`, 
          team: result[0].team.name,
          position: result[0].position,
          height: `${result[0].height_feet}-${result[0].height_inches}`,
          player_id: result[0].id,
          team_id: result[0].team.id,
        }
        this.setState({
          player2Info: data
        }, () => {
          this.getPlayerStats([this.state.player1Info.player_id, data.player_id])
        })
      }
    })
  }
  getPlayerStats(playerIds) {
    NbaCalls.getPlayerStats(playerIds).then((res) => {
      if(!res){
        alert('Opps! One or both of your players were not found! Please check the player\'s names.')
      } else {
      let player1 = res.data[0];
      let player2 = res.data[1];
      this.setState({
        player1Info: {
          ...this.state.player1Info,
          ast: player1.ast,
          blk: player1.blk,
          dreb: player1.dreb,
          oreb: player1.oreb,
          pts: player1.pts,
          stl: player1.stl,
          turnover: player1.turnover,
          pf: player1.pf,
          games_played: player1.games_played
        },
        player2Info: {
          ...this.state.player2Info,
          ast: player2.ast,
          blk: player2.blk,
          dreb: player2.dreb,
          oreb: player2.oreb,
          pts: player2.pts,
          stl: player2.stl,
          turnover: player2.turnover,
          pf: player2.pf,
          games_played: player2.games_played
        },
        buttonOff: false
      })}
    })
  }

  render () {

    return (
      <div className="App">
        <header className="App-header">
          <div className="wrapper">
            <h1>NBA Stats 🏀</h1>
          </div>
        </header>
        <div className="mainSection wrapper">
          <div className="filters">
            <Filter getPlayer1Info={this.getPlayer1Info} getPlayer2Info={this.getPlayer2Info} buttonOn={this.buttonOff}></Filter>
          </div>
          <div className="comparisonSection">
            <Player player1FullStats={this.state.player1Info} player2FullStats={this.state.player2Info}></Player>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
