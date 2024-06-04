const http = require('http');

const hostname = 'localhost';
const port = 1245;
const app = http.createServer();
/**
 * Starts a small HTTP server using the http module.
 */
app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server listening at -> hhtp://${hostname}:${port}\n`);
});

module.exports = app;
