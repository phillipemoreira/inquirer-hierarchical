var util = require("util");
var Base = require("inquirer/lib/prompts/base");

module.exports = Prompt;

function Prompt() {}
util.inherits( Prompt, Base );