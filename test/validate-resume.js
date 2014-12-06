var fs = require('fs');
var util = require('util');
var colors = require('colors/safe');
var Validator = require('jsonschema').Validator;
var resumeSchema  = require('resume-schema/schema.json');
var resume = JSON.parse(fs.readFileSync('resume.json', 'utf8'));
var red = colors.red, green = colors.green;
var v = new Validator();
var printError = function(err) {
    console.error(red(' × ') + err.message);
};

var result = v.validate(resume, resumeSchema);

if (result.errors && result.errors.length) {
    console.log(red('Errors:'));
    
    result.errors.map(printError);
}

if (!result.errors || !result.errors.length) {
    console.log(green(' ✓ ') + 'Valid resume JSON');
    process.exit(0);
} else {
    process.exit(1);
}
