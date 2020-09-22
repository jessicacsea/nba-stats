import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
        player1Search: '',
        player2Search: '',
        error: '',
        button: true
    }

    this.sendPlayers = this.sendPlayers.bind(this);
    this.selectPlayers = this.selectPlayers.bind(this);
    this.handlePlayer2Change = this.handlePlayer2Change.bind(this);
    this.handlePlayer1Change = this.handlePlayer1Change.bind(this);
  }

  selectPlayers(e){
    e.preventDefault();
    if(/\s/.test(this.state.player1Search) && /\s/.test(this.state.player2Search)){
      this.sendPlayers(this.state.player1Search, this.state.player2Search);
      this.setState({
        error: ''
      })
    } else {
      this.setState({
        error: 'Please enter both players first and last names.'
      })
    }
  }

  sendPlayers(player1, player2) {
    Promise.all([
      this.props.getPlayer1Info(player1),
    ]).then(
      this.props.getPlayer2Info(player2)
    )
  }

  handlePlayer1Change(e) {
    this.setState({
      player1Search: e.target.value
    })
  }
  handlePlayer2Change(e) {
    e.preventDefault();
    this.setState({
      player2Search: e.target.value
    })
  }

  render() {
    return (
      <div id="filterComp">
          <h2>Compare your favourite players' 2019 Season Averages</h2>
          <h2>{this.state.error}</h2>
          <div className="filterChoices">
              <div className="player1Filter">
                <h1>Player One</h1>
                <form>
                  <label for="playerSelectOne">Enter the player's first and last name:</label>
                  <input type="text" name="playerSelectOne" onChange={this.handlePlayer1Change}></input>
                </form>
              </div>
              <div className="player2Filter">
                <h1>Player Two</h1>
                <form>
                  <label for="playerSelectTwo">Enter the player's first and last name:</label>
                  <input type="text" name="playerSelectTwo" onChange={this.handlePlayer2Change}></input>
                </form>
              </div>
          </div>
            <button onClick={this.selectPlayers}>Let's Go!</button>
      </div>
    )
  }
}
export default Filter;