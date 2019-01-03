function maxOfthree(a,b,c) {
    if (a > b && a > c) {
        return "brojot e najgolem";
    }
    else if (b > a && b > c) {
        return "brojot e golem";
    }
    else if (c > a && c > b) {
        return "najgolem";
    }
}
var rezultat = maxOfthree(50,30,20);
console.log(rezultat);