async function notFoundMiddleware(request, response, next) {
    response.sendFile('/Users/dramix/cours/express-ia-2023/API-Bot-Discord/views/not-found.html');
}

exports.notFoundMiddleware = notFoundMiddleware;