const routes = require('next-routes')();


routes.add('/index', '/')
      .add('/vote/:mb_addr/:address', '/vote')
      .add('/status/:mb_addr/:address', '/status')
      .add('/admin/:mb_addr/:address', '/admin')
      .add('/home/:mb_addr', '/home');
module.exports = routes;