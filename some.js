
let phones=[{name:'apple',cost:10},{name:'samsung',cost:10},{name:'vivo',cost:10}]





const test=phones.slice()
test[0].cost=15

console.log(phones);
console.log(test);