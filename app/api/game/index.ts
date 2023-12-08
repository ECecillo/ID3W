import express from 'express';
import compression from 'compression';

const app = express();
const http = require('http');
const path = require('path');
const port = 8000;
// Use the whole root as static files to be able to serve the html file and
// the build folder
app.use(compression());
app.use(express.static(path.join(__dirname, '/')));
// Send html on '/'path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, +'index.html'));
});
// Create the server and listen on port
http.createServer(app).listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});

export default app;
