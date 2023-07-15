const axios = require('axios')


const config = axios.create({
    baseURL:
        `https://maps.googleapis.com/`,
    timeout: 3000,
})

module.exports = {config}

