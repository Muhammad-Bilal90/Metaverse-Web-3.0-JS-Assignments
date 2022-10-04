const vehicles = ["Hayabusa", "Ninja H2R", "Audi"];
const statements = ["is The best of All", "is The most fastest", "makes me feel crazy to drive"];

vehicles.map((item, ind) => {
    console.log(`${item} ${statements[ind]}`);
});