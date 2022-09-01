const { createServer } = require('http');
const { app } = require('./express');
const serverHttp = createServer(app);

module.exports = { serverHttp };
