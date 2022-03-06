const { parser } = require("./main")
const fs = require("fs")
test('Can scan and generate correct tokens for identifiers', function() {
    const inputFile = "test/input2.txt"
    const outputJsonFile = "test/output2.json";
    const input = fs.readFileSync(inputFile,
        {encoding:'utf8', flag:'r'});
    var output = parser.parse(input);
    var outputString = JSON.stringify(output, null, 2)
    var outputJson = fs.readFileSync(outputJsonFile, {encoding: 'utf-8', flag:'r'}).replace(/\r\n|\r/g, '\n');    
    expect(outputString).toBe(outputJson);
  })
