function cub(number) {
    var rezult = 0;
    while (number > 0) {
        var cubes = number % 10;
        rezult +=Math.pow(cubes,3);
        number = Math.floor(number / 10);
    }
    return rezult;
}
function final() {
    for (i = 100;i <= 999;i++) {
        var back = cub(i);
        if (back === i) {
            console.log(i);
        }
    }
}
final();