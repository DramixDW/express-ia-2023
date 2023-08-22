const { Router } = require('express');

const movieRouter = Router();

movieRouter.get('/', (request, response) => {
    // Il va aller chercher un template movies.mustache
    // dans notre dossier Views grâce à server.set('views')
    // dans le point d'entrée de notre serveur
    response.render('movies', {
        message: 'Bienvenue sur ma liste de films :)'
    });
})


exports.movieRouter = movieRouter;