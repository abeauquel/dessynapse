// On bablise notre code pour utiliser la syntax Es6
require('babel-register')({
    presets: [ 'env' ]
})

// Import the rest of our application.
module.exports = require('./serveur.js');