let locations = ['switzerland', 'england', "usa", "dubai", "australia"];

//origial array
console.log(locations);

let splicedLocations = locations.slice();

// sorted alphabetically
let sortedAlphabetically = splicedLocations.sort();
console.log(sortedAlphabetically);

//origial array
console.log(locations);

// alphabetically reversed
let reversed = splicedLocations.reverse();
console.log(reversed);

//origial array
console.log(locations);

// reversing original array
locations.reverse();
console.log(locations);
locations.reverse();
console.log(locations);

// sorting original array alphabetically

locations.sort();
console.log(locations);

// reversing original sorted array
locations.reverse();
console.log(locations);