let personName = "bilal";

// to lowsercase
console.log(personName.toLowerCase());

// to UPPERCASE
console.log(personName.toUpperCase());

// to Titlecase for single word
let restName = personName.slice(1);
let titleName = `${personName.charAt(0).toUpperCase()}${restName}`;
console.log(titleName);


// to Titlecase to multiple words

let person2 = "muhammad bilal khan";

function toTitlecase(str){
    let res = str.split(" ").map(word => {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    })
    console.log(res.join(" "));
}

toTitlecase(person2);