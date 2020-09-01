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
      .add('/Academic/school/:address/index', '/Academic/school/index')
      .add('/Academic/school/login', '/Academic/school/login')
      .add('/Academic/school/students', '/Academic/school/students')
      .add('/Academic/ministry/:address/index', '/Academic/ministry/index')
      .add('/Academic/ministry/login', '/Academic/ministry/login')
      .add('/Academic/ministry/schoolList', '/Academic/ministry/schoolList')
      .add('/Academic/verify/index', '/Academic/VerifyPage/index')
      .add('/Academic/verify/verifyCertificate', '/Academic/VerifyPage/verifyCert')
<<<<<<< HEAD
      .add('/dNews/index', '/dNews/index')
=======
>>>>>>> 9b783a40db7011622b61eb5f6a70c18078826e78
      .add('/Eid/index', '/Eid/index')
      .add('/Eid/List/','/Eid/List/index')
      .add('/Eid/List/CreateSingleEntity', '/Eid/List/CreateSingleEntity')
      .add('/Eid/List/CreateMultipleEntity', '/Eid/List/CreateMultipleEntity')
      .add('/Eid/storage/index', '/Eid/storage/index')
      .add('/Eid/storage/:address', '/Eid/storage/storage')
      .add('/Eid/sendPage/index', '/Eid/sendPage/index')
      .add('/Eid/sendPage/:address', '/Eid/sendPage/show')
      .add('/Eid/sendPage/:address/:index/edit', '/Eid/sendPage/edit')
      .add('/Eid/receivePage/index', '/Eid/receivePage/index')
      .add('/Eid/receivePage/:address', '/Eid/receivePage/show');
module.exports = routes;