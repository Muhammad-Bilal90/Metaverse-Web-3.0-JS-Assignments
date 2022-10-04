const current_users = ["Umer", "bilal", "amir", "zubair", "raahim"];
const new_users = ["ahmed", "saqib", "saad", "bilal", "umer"];

const sensitiveCurrentUsers = current_users.map((user) => {
    return user.toLowerCase();
});

console.log(sensitiveCurrentUsers);
new_users.forEach((user) => {
    sensitiveCurrentUsers.includes(user.toLowerCase()) ?
        console.log("the person will need to enter a new username"):
        console.log("the username is available")
});