const { parser } = require("main")
const fs = require("fs")
const assert = require('assert');

describe('Scanning Numbers: ', function() {
  it('can scan and generate correct tokens for numbers', function() {
    const inputFile = "test/input1.txt"
    const outputJsonFile = "test/output1.json";
    const input = fs.readFileSync(inputFile,
        {encoding:'utf8', flag:'r'});
    var output = parser.parse(input);
    var outputString = JSON.stringify(output, null, 2)
    var outputJson = fs.readFileSync(outputJsonFile, {encoding: 'utf-8', flag:'r'});    
    assert.equal(outputJson, outputString);
  })
})

describe('Scanning Identifiers: ', function() {
  it('can scan and generate correct tokens for Identifiers', function() {
    const inputFile = "test/input2.txt"
    const outputJsonFile = "test/output2.json";
    const input = fs.readFileSync(inputFile,
        {encoding:'utf8', flag:'r'});
    var output = parser.parse(input);
    var outputString = JSON.stringify(output, null, 2)
    var outputJson = fs.readFileSync(outputJsonFile, {encoding: 'utf-8', flag:'r'});    
    assert.equal(outputJson, outputString);
  })
})

describe('Scanning Keywords: ', function() {
  it('can scan and generate correct tokens for keywords', function() {
    const inputFile = "test/input3.txt"
    const outputJsonFile = "test/output3.json";
    const input = fs.readFileSync(inputFile,
        {encoding:'utf8', flag:'r'});
    var output = parser.parse(input);
    var outputString = JSON.stringify(output, null, 2)
    var outputJson = fs.readFileSync(outputJsonFile, {encoding: 'utf-8', flag:'r'});    
    assert.equal(outputJson, outputString);
  })
})