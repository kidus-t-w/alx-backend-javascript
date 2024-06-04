const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 1245;
/**
 * Starts a small HTTP server using the http module.
 */
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Hello Holberton School!');
});

app.listen(port, hostname, () => {
  // console.log(`Hello Holberton School!`)
});

module.export = app;