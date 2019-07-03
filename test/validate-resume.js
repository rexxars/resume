var fs = require('fs');
var util = require('util');
var colors = require('colors/safe');
var Validator = require('jsonschema').Validator;
var resumeSchema  = require('resume-schema/schema.json');
var red = colors.red, green = colors.green;
var v = new Validator();
var printError = function(err) {
    console.error(red(' × ') + err.message);
};

try {
    var resume = JSON.parse(fs.readFileSync('resume.json', 'utf8'));
} catch (e) {
    console.log('Invalid JSON, cannot parse.');
    throw e;
}

var result = v.validate(resume, resumeSchema);

if (result.errors && result.errors.length) {
    console.log(red('Errors:'));

    result.errors.forEach(printError);
}

if (!result.errors || !result.errors.length) {
    console.log(green(' ✓ ') + 'Valid resume JSON');
    process.exit(0);
} else {
    process.exit(1);
}
