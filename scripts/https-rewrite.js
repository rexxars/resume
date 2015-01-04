'use strict';

var fs = require('fs');
var fsOpts = { encoding: 'utf8' };
var filePath = __dirname + '/../resume.html';
var resume = fs.readFileSync(filePath, fsOpts);

fs.writeFileSync(filePath, resume.replace(/(["\(])\/\//g, '$1https://', fsOpts));
