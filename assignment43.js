function car_info(manufacturer, model, keywords, color, value){
    let carObj = {
        manufacturer,
        model,
        keywords,
        color,
        value
    }

    return console.log(carObj);
}

car_info("Audi", 2020, ["Sunroof", "Disk Breaks", "Electric"], "Red", 60000);