const axios = require('axios');

const URL = `https://www.balldontlie.io/api/v1/`
const photoURL = `https://nba-players.herokuapp.com/`

const getPlayers = async (player) => {
    try {
        return await axios.get(
            `${URL}players/?search=${player}`
        ).then(res => {return res.data})
    } catch(e){
        console.log(e)
    }
}

const getPlayerStats = async (playerId) => {
    try {
        return await axios.get(
            `${URL}season_averages?player_ids[]=${playerId}`
        ).then(res => {return res.data})
    } catch (e) {
        console.log(e)
    }
}

const getPlayerHeadshot = async (lastName, firstName) => {
    try {
        return await axios.get(
            `${photoURL}players/${lastName}/${firstName}`
        ).then(res => {return res.data})
    } catch(e) {
        console.log(e)
    }
}

export default {
    getPlayers,
    getPlayerStats,
    getPlayerHeadshot
}
