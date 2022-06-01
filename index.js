var YAML = require('yamljs');
const fs = require('fs');

var fileIn = process.argv[2];
var fileOut = process.argv[3] || 'output.json';

try {
    object = YAML.load(fileIn);
}
catch (error) {
    console.log("Problems reading your yaml file");
    process.exit(1);
}
// See 
// https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-cfn-artifacts.html#w2ab1c21c15c15
var final = {"Parameters":{}};

try {
    object.cfnParams.forEach(element => {
        var param = element.ParameterKey;
        var value = element.ParameterValue;
        final.Parameters[param] = value;
    })  
}
catch (error) {
    console.log("Your yaml file does not have the correct structure");
    process.exit(1);
}

var jsonContent = JSON.stringify(final);


fs.writeFile(fileOut, jsonContent, 'utf8', (err) => {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        console.log(err);
        process.exit(1);
    }
    console.log("JSON file has been saved: " + fileOut);
});