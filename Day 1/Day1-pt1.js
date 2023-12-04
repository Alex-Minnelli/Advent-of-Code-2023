const fs = require('fs');

let count = 0;

let text = fs.readFileSync("input.txt").toString('utf-8');
let textByLine = text.split("\n");

for (let x = 0; x < textByLine.length-1; x++) {
    let y = textByLine[x].replace(/[^0-9]/g, '');
    //console.log(y);
    let z = y.at(0) + y.at(y.length-1);
    count += Number(z);
}

console.log(count);