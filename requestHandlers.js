/**
 * Created by sasha on 18/07/16.
 */

var querystring = require("querystring");
//var PythonShell = require('python-shell');

var respond = "";
var device = "";
var cmd_mass = "";
var user_cmd = "";

function index( response , postDate)
{
        fs = require('fs');
        fs.readFile('./index/index.html', function (err, info) {
            if (err) throw err;
            response.write(info);
            response.end();
        });
}

function help( response , postDate)
{
    fs = require('fs');
    fs.readFile('./help/help.html', function (err, info) {
        if (err) throw err;
        response.write(info);
        response.end();
    });
}
function model( response , postDate)
{
    fs = require('fs');
    fs.readFile('./model/model.html', function (err, info) {
        if (err) throw err;
        response.write(info);
        response.end();
    });
}
/**
 * Created by sasha on 18/07/16.
 */
function error( response , postData )
{
    response.writeHead( 200 , { "Content-Type": "text/plain" } );
    response.write( "404 not found: " + querystring.parse( postData ).text );
    response.end();
}

function file( response , postData ) {
    // Читаем файл
    fs = require('fs');
    fs.readFile('.' + postData, function (err, info)
    {
        if (err) error(response, postData);
        else {
            response.write(info);
            response.end();
        }
    });
}

function ISS( response , postDate)
{
    fs = require('fs');
    fs.readFile('./satellite/ISS.html', function (err, info) {
        if (err) throw err;
        response.write(info);
        response.end();
    });
}

function LS7( response , postDate)
{
    fs = require('fs');
    fs.readFile('./satellite/landsat-7.html', function (err, info) {
        if (err) throw err;
        response.write(info);
        response.end();
    });
}

function LS8( response , postDate)
{
    fs = require('fs');
    fs.readFile('./satellite/landsat-8.html', function (err, info) {
        if (err) throw err;
        response.write(info);
        response.end();
    });
}

exports.file = file;
exports.index = index;
exports.help = help;
exports.model = model;
exports.ISS = ISS;
exports.LS7 = LS7;
exports.LS8 = LS8;
exports.error = error;