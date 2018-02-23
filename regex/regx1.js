let re;

re = /nitro/; ///nitro/g global search............... /nitro/ig
//re = new RegExp(/nitro/);
console.log(typeof re);
console.log(re instanceof RegExp);

console.log(re.source);
// const result = re.exec('bagmane sapient nitro');
// //const result = re.exec('bagmane sapient'); results null
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

const result = re.test('sapient nitro'); //performs a case sensitive search but if re = /nitro/i - case-insensitive
console.log(result);

const str = 'sapient nitro';
//const result1 = str.match(re); // array
const result1 = str.search(re); //index
console.log(result1);