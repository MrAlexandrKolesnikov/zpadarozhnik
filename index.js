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
handle["/ISS"] = requestHandlers.ISS;
handle["/LS7"] = requestHandlers.LS7;
handle["/LS8"] = requestHandlers.LS8;

server.start(router.route , handle);



