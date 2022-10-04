// Actual output
let personName = '\t\t\tMuhammad\n\t\t\tBilal\t\t\t';
console.log('Actual output');
console.log(personName);

// removing white spaces only
let newName = personName.replaceAll('\t', "");
console.log('Removing white spaces:');
console.log(newName);

// removing all linebreaks
let oneLiner = newName.replaceAll('\n', "");
console.log("Removing linebreaks");
console.log(oneLiner);

// using trim which only trims whitespaces
let trimmedName = personName.trim();
console.log('Using trim method which only trims white spaces');
console.log(trimmedName);