const { Router } = require('express');

const movieRouter = Router();

movieRouter.get('/', (request, response) => {
    // Il va aller chercher un template movies.mustache
    // dans notre dossier Views grâce à server.set('views')
    // dans le point d'entrée de notre serveur
    response.render('movies', {
        message: 'Bienvenue sur ma liste de films :)',
        title: 'Ma vidéothéque',
        movies: [
            {
                title: 'Forrest Gump',
            }, {
                title: 'Alice au pays des merveilles'
            }
        ],
        listElement: function() {
            return function(text, render) {
                return '<li>' + render(text) + '</li>';
            }
        }
    });
})


exports.movieRouter = movieRouter;