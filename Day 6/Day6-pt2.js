let time = 42686985;
let distance = 284100511221341;


let a = 0;
let b = 0;
let count = 0;

for (let j = 1; j < time; j++){
    a = j;
    b = time-a;

    a*b > distance ? count++ : count = count;
}

console.log(count);