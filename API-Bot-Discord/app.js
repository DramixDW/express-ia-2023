const express = require('express');
const { versionRouter } = require('./Routers/version.router');
const { citationsRouter } = require('./Routers/citations.router');

const server = express();
// J'utilise mon router /versions
server.use(versionRouter);
// J'utilise mon router /citations
server.use(citationsRouter);

server.listen(8080, () => {
    console.log('Serveur prêt, à l\'écoute sur le port 8080');
})