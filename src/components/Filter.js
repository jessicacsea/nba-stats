import React, { Component } from 'react';
// import NbaApiCall from '../api/nbacom_collect_dates';
// import NbaApiPlayersCall from '../api/nbacom_collect_player';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        teams: [],
        player: '',
    }

  }

  callDates(e) {
      console.log('this is called')
    // NbaApiCall.main().then((res) => {
    //   console.log(res)
    // })
    // console.log(NbaApiCall)
  }

  
  render() {
    return (
      <div className="filterComp">
          <h2>Choose your team or player</h2>
          <div className="filterChoices">
              <h1>Team:</h1>
              
              <button onClick={this.callDates}>click here</button>
          </div>
      </div>
    )
  }
}


export default Filter;