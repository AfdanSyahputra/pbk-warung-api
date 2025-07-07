const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const fs = require("fs");

const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Load db.json content in-memory
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json"), "utf-8"));
const router = jsonServer.router(data); // gunakan object, bukan path file

server.use("/api", router);

module.exports = server;
