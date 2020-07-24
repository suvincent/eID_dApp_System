const routes = require('next-routes')();


routes.add('/index', '/')
      .add('/Vote/index', '/Vote/index')
      .add('/Vote/vote/:mb_addr/:address', '/Vote/vote')
      .add('/Vote/status/:mb_addr/:address', '/Vote/status')
      .add('/Vote/admin/:mb_addr/:address', '/Vote/admin')
      .add('/Vote/home/:mb_addr', '/Vote/home')
      .add('/Academic/index', '/Academic/index')
      .add('/Academic/certificates/:address/success', '/Academic/certificates/success')
      .add('/Academic/certificates/:address/transcript', '/Academic/certificates/transcript')
      .add('/Academic/school/index', '/Academic/school/index')
      .add('/Academic/school/students', '/Academic/school/students')
      .add('/Academic/school/schoolList', '/Academic/school/schoolList');
module.exports = routes;