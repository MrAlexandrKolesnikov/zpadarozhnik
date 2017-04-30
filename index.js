/**
 * Created by sasha on 17/07/16.
 */

var server = require("./server.js");
var router =require("./route.js");
var requestHandlers = require("./requestHandlers");

var handle = {}

handle["/"] = requestHandlers.index;
handle["error"] = requestHandlers.error;
handle["file"] = requestHandlers.file;
handle["/help"] = requestHandlers.help;
handle["/model"] = requestHandlers.model;
handle["/soyuz"] = requestHandlers.soyuz;

server.start(router.route , handle);



