let time = [42, 68, 69, 85];
let distance = [284, 1005, 1122, 1341];


let a = 0;
let b = 0;
let count = 0;
let count2 = 1;

for (let i = 0; i < time.length; i++){
    count = 0;
    console.log('Time: ' + time[i])
    for (let j = 1; j < time[i]; j++){
        a = j;
        b = time[i]-a;

        a*b > distance[i] ? count++ : count = count; 
        console.log(a);
    }
    count2 *= count;
}

console.log(count2);