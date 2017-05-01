/**
 * `input` type prompt
 */

var util = require("util");
var Base = require("inquirer/lib/prompts/base");

/**
 * Module exports
 */

module.exports = Prompt;

/**
 * Constructor
 */

function Prompt() {}
util.inherits( Prompt, Base );