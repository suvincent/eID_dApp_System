

const routes = require('./routes')
const express = require('express')
const next = require('next')
const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  const server = express()
  server.use(handler)
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

// const {createServer} = require('http');
// const next = require('next');
// const app = next({
//     dev: process.env.NODE_ENV !== 'production'
// });
// const routes = require('./routes');
// const handler = routes.getRequestHandler(app);
// app.prepare().then(()=>{
//     createServer(handler).listen(3000,err =>{
//         if(err)throw err;
//         console.log('Ready on local host');
//     });
// });