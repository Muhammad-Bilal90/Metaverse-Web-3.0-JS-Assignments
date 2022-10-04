// simple object
const simpleObject = {
    name: "Bilal",
    age: 25,
    city: "Karachi"
}

console.log(simpleObject);

//simple object with new and Object keyword
const simpleInfo = new Object({
    name: "Bilal",
    age: 25,
    city: "Karachi"
});

console.log(simpleInfo);

function Person (values){
        this.name = values.name;
        this.age = values.age;
        this.city = values.city
}

let personInfo = new Person({ name: "Bilal", age: 25, city: "Karachi"});
console.log(personInfo);
