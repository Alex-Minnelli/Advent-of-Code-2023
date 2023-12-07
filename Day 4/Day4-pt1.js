const fs = require('fs');

let text = fs.readFileSync("input.txt").toString('utf-8');
let textByLine = text.split("\n");

let count = 0;


for (let i = 0; i < textByLine.length; i++){
    let a, b, c;
    let d = 0;

    a = textByLine[i].substring(0, textByLine[i].indexOf(':'));
    b = textByLine[i].substring(textByLine[i].indexOf(':')+2, textByLine[i].indexOf('|')-1);
    c = textByLine[i].substring(textByLine[i].indexOf('|')+2);

    function removeSpace(arr, value){
        let k = 0;
        
        while (k < arr.length){
            if(arr[k] === value){
                arr.splice(k, 1);
            } else {
                k++;
            }
        }

        return arr;
    }

    let winning = removeSpace(b.split(' '), '');
    let have = removeSpace(c.split(' '), '')

    for (let j = 0; j < winning.length; j++){
        if(have.includes(winning[j])){
            d++;
        }
    }
    
    d !=0 ? count += Math.pow(2, (d-1)) : count += 0;
}

console.log(count);