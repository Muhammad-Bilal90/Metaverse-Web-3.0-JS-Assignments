const magicians = ["Saad","Saqib","Ahmed","Amir","Moaz"];

function make_great(magiciansArray){
    magiciansArray.forEach((magician, ind) => {
        magicians[ind] = `The Great ${magician}`;
    });

    return magicians;
}

make_great(magicians);

function show_magicians(magiciansArray){
    magiciansArray.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);