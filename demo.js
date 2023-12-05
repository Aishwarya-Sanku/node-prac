// app.js
//console.log('Hello    ');

// // app.js
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello|||||||, Express!');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);


