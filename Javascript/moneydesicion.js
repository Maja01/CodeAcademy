function korisnik(money) {
    if (money <= 5000) {
        return "kupi si majchka";
    }
    else if (money >= 10000) {
        return "kupi si jakna";
    }
    else {
        return "nema pari";
    }
}
var rezultat = korisnik(11000);
console.log(rezultat);