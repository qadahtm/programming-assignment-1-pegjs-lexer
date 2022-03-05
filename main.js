// Use require to create objects for the modules you need
// We need the fs module to read/write from/to local files
const fs = require('fs');
// We need the pegjs module to create the lexer and the parser (in the future)
var peg = require("pegjs");

// Reading the grammar file
const grammarFile = "grammar.pegjs";
const grammar = fs.readFileSync(grammarFile,
    {encoding:'utf8', flag:'r'});
// Create the "parser" object
var parser = undefined
try {
    parser = peg.generate(grammar);
} catch (error) {
    console.log("Error generating parser/lexer from grammar. Make sure you have correct grammar syntax")
}

module.exports = { parser }