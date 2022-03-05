const { parser } = require("./main")
const fs = require("fs")
test('Can scan and generate correct tokens for keywords', function() {
    const inputFile = "test/input3.txt"
    const outputJsonFile = "test/output3.json";
    const input = fs.readFileSync(inputFile,
        {encoding:'utf8', flag:'r'});
    var output = parser.parse(input);
    var outputString = JSON.stringify(output, null, 2)
    var outputJson = fs.readFileSync(outputJsonFile, {encoding: 'utf-8', flag:'r'});    
    expect(outputString).toBe(outputJson);
  })
