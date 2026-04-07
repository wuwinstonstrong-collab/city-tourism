const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    if (fs.existsSync(filePath)) {
        const ext = path.extname(filePath);
        const ct = ext === '.css' ? 'text/css' : ext === '.js' ? 'application/javascript' : ext === '.jpg' ? 'image/jpeg' : 'text/html';
        res.writeHead(200, {'Content-Type': ct});
        fs.createReadStream(filePath).pipe(res);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(8888, () => console.log('Server running on port 8888'));
