const sandwhichItems = ["sauce", "mashrooms", "beef"];

function make_summary(...items){
    let order = {
        items,
    };
    console.log("Order Summary:");
    console.table(order);
}

make_summary(...sandwhichItems);
make_summary(...sandwhichItems, "black pepper");
make_summary(...sandwhichItems, "black pepper", "onion");
make_summary(...sandwhichItems, "black pepper", "onion", "carrot");