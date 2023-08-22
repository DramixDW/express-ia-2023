const { Router } = require('express');
const { secretMiddleware } = require('../middlewares/secret.middleware');

const dashboardRouter = Router();

dashboardRouter.use(secretMiddleware);
dashboardRouter.get('/', (request, response) => {
    response.sendFile('/Users/dramix/cours/express-ia-2023/API-Bot-Discord/views/dashboard.html');
})



exports.dashboardRouter = dashboardRouter;