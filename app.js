const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/health") {
      res.writeHead(200);
      res.end("OK");
    } else {
      res.end("Hello Amrit 🚀");
    }
  })
  .listen(8080);
