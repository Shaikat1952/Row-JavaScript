var people=['p-1','p-2','p-3','p-4','p-5'];
console.log(people);
people.pop();
console.log(people);
people.shift();
console.log(people);
people.unshift('p-unknown');
console.log(people);
people.push('p-6');
console.log(people);
var show=people.slice(0,4);
console.log(show);