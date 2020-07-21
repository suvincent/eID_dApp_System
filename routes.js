const routes = require('next-routes')();


routes.add('/index', '/')
      .add('/Vote/index', '/Vote/index')
      .add('/Vote/vote/:mb_addr/:address', '/Vote/vote')
      .add('/Vote/status/:mb_addr/:address', '/Vote/status')
      .add('/Vote/admin/:mb_addr/:address', '/Vote/admin')
      .add('/Vote/home/:mb_addr', '/Vote/home')
      .add('/Academic/certificates/success', '/Academic/certificates/success')
      .add('/Academic/certificates/transcript', '/Academic/certificates/transcript')
      .add('/Academic/school', '/Academicschool/index')
      .add('/Academic/school/:address/success', '/Academicschool/success');
module.exports = routes;