const express = require('express');
const { versionRouter } = require('./Routers/version.router');
const { citationsRouter } = require('./Routers/citations.router');
const { dashboardRouter } = require('./Routers/dashboard.router');
const { forbiddenRouter } = require('./Routers/forbidden.router');
const { secretMiddleware } = require('./middlewares/secret.middleware');

const server = express();
// J'utilise mon router /versions
server.use(versionRouter);
// J'utilise mon router /citations
server.use(citationsRouter);
// server.use('/dashboard', secretMiddleware);
server.use('/dashboard', dashboardRouter);
server.use('/forbidden', forbiddenRouter);


server.listen(8080, () => {
    console.log('Serveur prêt, à l\'écoute sur le port 8080');
})