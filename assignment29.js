let users = ["admin", "umer", "bilal", "amir", "zubair"];

users.forEach(user => {
    if(user === "admin"){
        console.log(`Hello ${user}, would you like to see a status report`);
    }else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
});

users.length = 0;
console.log(users);

if(users.length === 0){
    console.log(`We need to find some users!`);
}