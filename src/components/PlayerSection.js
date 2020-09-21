import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
        teams: [],
        player1FullStats: this.props.player1FullStats,
        player2FullStats: this.props.player2FullStats
    }
  }
  
  render() {
    return (
      <div id="playerSection">
          <div className="player1Section">
            <h2>{this.props.player1FullStats.name}</h2>
            <div className="playerProfile">
                <div className="playerPicture"><img src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200768.png" alt="headshot of kyle lowry, he is wearing a red raptors jersey"></img></div>
                <div className="playerInfo">
                    <h4>Name: <span className="playerName">{this.props.player1FullStats.name}</span></h4>
                    <h4>Position: <span className="playerName">{this.props.player1FullStats.position}</span></h4>
                    <h4>Height: <span className="playerName">{this.props.player1FullStats.height}</span></h4>
                </div>
                <div className="playerStats">
                    <h4>Games Played: <span className="playerName">{this.props.player1FullStats.games_played}</span></h4>
                    <h4>Points: <span className="playerName">{this.props.player1FullStats.pts}</span></h4>
                    <h4>Offensive Rebounds: <span className="playerName">{this.props.player1FullStats.oreb}</span></h4>
                    <h4>Defensive Rebounds: <span className="playerName">{this.props.player1FullStats.dreb}</span></h4>
                    <h4>Assists: <span className="playerName">{this.props.player1FullStats.ast}</span></h4>
                    <h4>Blocks: <span className="playerName">{this.props.player1FullStats.blk}</span></h4>
                    <h4>Steals: <span className="playerName">{this.props.player1FullStats.stl}</span></h4>
                    <h4>Turnovers: <span className="playerName">{this.props.player1FullStats.turnover}</span></h4>
                    <h4>Personal Fouls: <span className="playerName">{this.props.player1FullStats.pf}</span></h4>
                </div>
            </div>
          </div>
          <div className="player2Section">
            <h2>{this.props.player2FullStats.name}</h2>
            <div className="playerProfile">
                <div className="playerPicture"><img src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200768.png" alt="headshot of kyle lowry, he is wearing a red raptors jersey"></img></div>
                <div className="playerInfo">
                    <h4>Name: <span className="playerName">{this.props.player2FullStats.name}</span></h4>
                    <h4>Position: <span className="playerName">{this.props.player2FullStats.position}</span></h4>
                    <h4>Height: <span className="playerName">{this.props.player2FullStats.height}</span></h4>
                </div>
                <div className="playerStats">
                    <h4>Games Played: <span className="playerName">{this.props.player2FullStats.games_played}</span></h4>
                    <h4>Points: <span className="playerName">{this.props.player2FullStats.pts}</span></h4>
                    <h4>Offensive Rebounds: <span className="playerName">{this.props.player2FullStats.oreb}</span></h4>
                    <h4>Defensive Rebounds: <span className="playerName">{this.props.player2FullStats.dreb}</span></h4>
                    <h4>Assists: <span className="playerName">{this.props.player2FullStats.ast}</span></h4>
                    <h4>Blocks: <span className="playerName">{this.props.player2FullStats.blk}</span></h4>
                    <h4>Steals: <span className="playerName">{this.props.player2FullStats.stl}</span></h4>
                    <h4>Turnovers: <span className="playerName">{this.props.player2FullStats.turnover}</span></h4>
                    <h4>Personal Fouls: <span className="playerName">{this.props.player2FullStats.pf}</span></h4>
                </div>
            </div>
          </div>
      </div>
    )
  }
}
export default Player;