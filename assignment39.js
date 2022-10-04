const magicians = ["Saad","Saqib","Ahmed","Amir","Moaz"];

function show_magicians(magiciansArray){
    magiciansArray.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);