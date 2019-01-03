function registracija(bhp) {
    if (bhp <= 85) {
        return "3000den";
    }
    else if (bhp > 85 && bhp <= 150) {
        return "5000den";
    } 
    else if (bhp > 150) {
        return "15000den";
    }
}
var rezultat = registracija(200);
console.log(rezultat);