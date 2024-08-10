import https from 'https';
import fs from 'fs';
import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';
var options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('crt.pem'),
    ca: fs.readFileSync('bundle.pem')
};
const app = express();
// Change this based on your astro.config.mjs, `base` option.
// They should match. The default value is "/".
const base = '/';
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);

//app.listen(80);
var server = https.createServer(options,app);
server.listen(443);