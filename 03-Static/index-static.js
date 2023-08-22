const express = require('express');

const server = express();

// Il lui faut absolument un chemin absolu à cette endroit-là
server.use('/assets', express.static(__dirname + '/assets'))
server.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})


server.listen(8001, (response, request) => {
    console.log('Je réponds et écoute sur le port 8001 !');
})