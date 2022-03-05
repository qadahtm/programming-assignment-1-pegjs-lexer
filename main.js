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
var parser = peg.generate(grammar);

test()

/**
 * A function to test the grammar
 */
function test(){
    // Currently configured usecases
    var inputCases = ['input1.txt', 'input2.txt', 'input3.txt', 'input4.txt', 'input5.txt']
    var expectedOutput = ['output1.json', 'output2.json', 'output3.json', 'output4.json', 'output5.json']
    for (const i in inputCases) {
        if (Object.hasOwnProperty.call(inputCases, i)) {
            const inputFile = `test-cases/${inputCases[i]}`;
            const input = fs.readFileSync(inputFile,
                {encoding:'utf8', flag:'r'});
            console.log(inputFile)
            var output = parser.parse(input);
            var outputString = JSON.stringify(output, null, 2)
            const outputJsonFile = `test-cases/${expectedOutput[i]}`;
            var outputJson = fs.readFileSync(outputJsonFile, {encoding: 'utf-8', flag:'r'});
            console.log(`Output: ${expectedOutput[i]}, Match? ${outputJson == outputString}`);
        }
    }
}




