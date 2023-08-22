const express = require('express');
const { versionRouter } = require('./Routers/version.router');
const { citationsRouter } = require('./Routers/citations.router');
const { dashboardRouter } = require('./Routers/dashboard.router');
const { forbiddenRouter } = require('./Routers/forbidden.router');
const { userRouter } = require('./Routers/user.router');
const mustacheExpress = require('mustache-express');
const { notFoundMiddleware } = require('./middlewares/not-found.middleware');
const { loggerMiddleware } = require('./middlewares/logger.middleware');

const server = express();
server.use(loggerMiddleware);
server.use(express.json());
server.use('/ressources', express.static(__dirname + '/ressources'));
server.engine('mustache', mustacheExpress());
server.set('view engine', 'mustache');
server.set('views', './views');

// J'utilise mon router /versions
server.use(versionRouter);
// J'utilise mon router /citations
server.set('views', './views');
server.use(citationsRouter);
// server.use('/dashboard', secretMiddleware);
server.use('/dashboard', dashboardRouter);
server.use('/forbidden', forbiddenRouter);
server.use('/users', userRouter);
server.use(notFoundMiddleware);


server.listen(8080, () => {
    console.log('Serveur prêt, à l\'écoute sur le port 8080');
})