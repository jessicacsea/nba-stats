const axios = require('axios');

const URL = `https://www.balldontlie.io/api/v1/`

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

export default {
    getPlayers,
    getPlayerStats
}