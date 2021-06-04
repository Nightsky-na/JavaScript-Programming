const n = parseInt(readline());
let num=0;
let s;
for (let i = 1; i < n; i++) {
    if(n%i===0) num+=i;
}
if (num>n) s = 'abundant';
else if(num<n)s = 'deficient';
else s = 'perfect';


console.log(s);
