let guests = ["Ahmed", "Saqib", "Saad", "Usama", "Moaz"];
const friendNotComing = "Saad";
console.log(guests);

function invitation(){
    guests.map((guest, i) => {
        if(guest === friendNotComing){
            guests.splice(i,1, "Zaki");
            console.log(`Hey, ${guests[i]}, You are invited for dinner at my place`);
        }else {
            console.log(`Hey, ${guest}, You are invited for dinner at my place`)
        }
});
}
invitation();
console.log(guests);

console.log("Hey Friends I found a bigger space for the dinner, lets invite some more friends!");

guests.unshift("Amir");
guests.splice(3,0,"Annus");
guests.push("Wasif")

invitation();
console.log(guests);

console.log("Sorry firends! I can only invite 2 people");

let totalGuests = guests.length -1;

console.log(totalGuests);
for(let i= totalGuests; i > 1; i--){
    console.log(`Sorry ${guests[i]}, you are not invited!`);
    guests.pop();
}

console.log(guests);

invitation();

guests.length = 0;

console.log(guests);
