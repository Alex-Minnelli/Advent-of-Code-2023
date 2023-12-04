const fs = require('fs');

let count = 0;

let text = fs.readFileSync("input.txt").toString('utf-8');
let textByLine = text.split("\n");

for (let x = 0; x < textByLine.length-1; x++) {
    let y = textByLine[x].replace(new RegExp("one", "g"), 'one1one').replace(new RegExp("two", "g"), 'two2two').replace(new RegExp("three", "g"), 'three3three').replace(new RegExp("four", "g"), 'four4four').replace(new RegExp("five", "g"), 'five5five').replace(new RegExp("six", "g"), 'six6six').replace(new RegExp("seven", "g"), 'seven7seven').replace(new RegExp("eight", "g"), 'eight8eight').replace(new RegExp("nine", "g"), 'nine9nine');
    let z = y.replace(/[^0-9]/g, '');
    let a = z.at(0) + z.at(z.length-1);
    count += Number(a);
}

console.log(count);