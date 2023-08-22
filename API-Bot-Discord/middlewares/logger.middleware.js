async function loggerMiddleware(request, response, next) {
    console.log(`${new Date().toLocaleDateString()} ${request.method} ${request.url}`);
    await next();
}

exports.loggerMiddleware = loggerMiddleware;