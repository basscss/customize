
var fs = require('fs');
var path = require('path');
var bassdata = require('basscss/package.json').basscss;
var generateData = require('custom-css/tasks/data');

var data;
var options = {};

options.modules = bassdata.modules;
options.variables = bassdata.variables;
options.dirname = path.join(__dirname, './node_modules/basscss');

data = generateData(options);

fs.writeFileSync(path.join(__dirname, './data.json'), JSON.stringify(data));

