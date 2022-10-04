const magicians = ["Saad","Saqib","Ahmed","Amir","Moaz"];

// Original Array
console.log("Origianl Array:");
function show_magicians(magiciansArray){
    magiciansArray.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);

// Transformed Array

let transformedArray = [];
console.log("Transformed Array:")
function make_great(magiciansArray){
    magiciansArray.map((magician) => {
        return transformedArray.push(`The Great ${magician}`);
    }); 

    return transformedArray;
}

make_great(magicians);
console.log(transformedArray);
console.log(magicians);