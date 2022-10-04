function make_album(artistName, albumTitle, totalTracks){
    let albums = {
        albumTitle,
        artistName,
        totalTracks: totalTracks ? totalTracks : "NOT AVAILABLE!"
    }
    return console.log(albums);
}

make_album("Atif Aslam", "Tu Jaane Na");
make_album("Alan Walker", "Faded");
make_album("Farhan Saeed", "Wo Lamhe", 2);