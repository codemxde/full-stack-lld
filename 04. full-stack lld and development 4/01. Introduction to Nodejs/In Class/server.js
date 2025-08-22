const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/plain');
  res.write('Hello World');
  res.end();
});

const port = 8000;
const host = 'localhost';
server.listen(port, () => {
  console.log(`Server is live on http://${host}:${port}`);
});
