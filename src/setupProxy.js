const proxy = require('http-proxy-middleware');

function Proxy(app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:3000',
      pathRewrite: {
        '^/api': '/',
      },
    }),
  );
}

module.exports = Proxy;
