let mountains = new Array("K2", "Himliya", "Nanga Parbat", false, "Mount Everiste", 10);
console.log(mountains);

mountains.forEach((mountain) => {
    if(typeof mountain !== "string"){
        console.log(mountain)
        throw Error("Intenional Error: Proper name for mountain required 'ONLY STRING VALUES ALLOWED!'")
    }else {
        console.log(mountain);
    }
});