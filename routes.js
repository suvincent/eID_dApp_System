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
      .add('/Academic/ministry/index', '/Academic/ministry/index')
      .add('/Academic/ministry/schoolList', '/Academic/ministry/schoolList')
      .add('/Academic/verify/index', '/Academic/VerifyPage/index')
      .add('/Academic/verify/verifyCertificate', '/Academic/VerifyPage/verifyCert')
      .add('/Eid/List','/Eid/List')
      .add('/Eid/CreateEntity', '/Eid/CreateEntity')
      .add('/Eid/enter', '/Eid/index')
      .add('/Eid/storage', '/Eid/storage')
      .add('/Eid/send/index', '/Eid/sendPage/index')
      .add('/Eid/send/edit', '/Eid/sendPage/edit')
      .add('/Eid/receive/index', '/Eid/receivePage/index');
module.exports = routes;