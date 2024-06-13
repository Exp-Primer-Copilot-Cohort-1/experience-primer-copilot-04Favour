// Create web server
const http = require('http');
const fs = require('fs');

// Create a server
http.createServer((req, res) => {
  // Read the file
  fs.readFile('comment.html', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
