'use strict';

var fs = require('fs');
var fsOpts = { encoding: 'utf8' };
var filePath = __dirname + '/../resume.html';
var resume = fs.readFileSync(filePath, fsOpts);

fs.writeFileSync(filePath, resume.replace(/" fa-fw"/g, '"fa fa-skype fa-fw"', fsOpts));
