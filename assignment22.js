// true
console.log(10 + 10 === 20);
// false
console.log(10 * 5 === 49);
// false
console.log('2' + 2 === 4);
// false
console.log(2 + "2" === 22);
// true
console.log(2 + "2" === "22");
// true
console.log(9 / 9 <= 1);
// true
console.log(99 * 1 > 98);
// false
console.log(10 + 10 === 200 && 200 < 100);
// true
console.log(10 + 10 === 200 || 200 > 100);
// true
console.log(10 + 10 === 20 && 200 > 100);

const array = ["Bilal", "umer", "amir", "zubair"];

// ture
console.log(array.includes("Bilal"));

// false
console.log(array.includes("Raahim"));