// function convert(celsius) {
//    var fanhrenheit = celsius * 1.8 + 32;
//    console.log(fanhrenheit);
// }
// convert(7);

// function convert(fanhrenheit) {
//     var celsius = (5/9) * (fanhrenheit - 32);
//     console.log(celsius);
// }
// convert(70);

function convert(temperature,tip) {
    if (tip === "C") {
        return temperature * 1.8 + 32;
    }
    else if (tip === "F") {
        return (5/9) * (temperature - 32);
    }
    else {
        return "nema nishto";
    }
}
var rezultat = convert(25, "C");
console.log(rezultat);