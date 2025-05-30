const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    let file = request.url === '/' ? './land-page/index.html' : `.${request.url}`;

    fs.readFile(file, (err, data) => {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.write("404 - Not found");
            response.end();
        } else {
            const ext = request.url === '/' ? "html" : request.url.split(".").pop();
            const mimeTypes = {
                html: "text/html",
                css: "text/css",
                js: "application/javascript",
                png: "image/png",
                jpg: "image/jpeg",
                svg: "image/svg+xml"
            };

            const contentType = mimeTypes[ext] || "text/plain";

            response.writeHead(200, { "Content-Type": contentType });
            response.end(data);
        }
    });
}).listen(8888);

console.log("Servidor corriendo en http://localhost:8888");


