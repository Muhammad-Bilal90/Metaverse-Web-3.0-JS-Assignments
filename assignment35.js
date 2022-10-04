function make_shirt(size = "large", message = "I love JavaScript"){
    console.log(`The size of shirt is "${size.toUpperCase()}", and the printed message is "${message.toUpperCase()}"`);
}

make_shirt();
make_shirt("medium");
make_shirt("small", "Hello World!");