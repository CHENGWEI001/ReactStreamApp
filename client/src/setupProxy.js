const proxy = require('http-proxy-middleware')

console.log(process.env.url);

module.exports = function(app) {
  // app.use(proxy('/api/*', { target: "https://dd953a862aee4260bbeebe5876ae73cb.vfs.cloud9.us-west-2.amazonaws.com:8081", xfwd: true, logLevel: 'debug' }));
  app.use(proxy('/api/*', { target: "http://localhost:8081", xfwd: true, logLevel: 'debug' }));
  app.use(proxy('/api/*/*', { target: "http://localhost:8081", xfwd: true, logLevel: 'debug' }));
}
