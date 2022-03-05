const { parser } = require("./main")
const fs = require("fs")
test('Can scan and generate correct tokens for all tokens in input', function() {
    const inputFile = "test/input5.txt"
    const outputJsonFile = "test/output5.json";
    const input = fs.readFileSync(inputFile,
        {encoding:'utf8', flag:'r'});
    var output = parser.parse(input);
    var outputString = JSON.stringify(output, null, 2)
    var outputJson = fs.readFileSync(outputJsonFile, {encoding: 'utf-8', flag:'r'});    
    expect(outputString).toBe(outputJson);
  })
