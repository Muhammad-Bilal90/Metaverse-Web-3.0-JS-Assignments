let guests = ["Ahmed", "Saqib", "Saad", "Usama", "Moaz"];
const friendNotComing = "Saad";
console.log(guests);

guests.map((guest, i) => {
        if(guest === friendNotComing){
            guests.splice(i,1, "Zaki");
            console.log(`Hey, ${guests[i]}, You are invited for dinner at my place`);
        }else {
            console.log(`Hey, ${guest}, You are invited for dinner at my place`)
        }

    });

console.log(guests);