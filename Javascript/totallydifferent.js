function razlichni(n,x) {
    for (var index = n + 1; index < 500000; index++) {
        var rezultat = proverka(index,x);
        if (rezultat) {
            console.log("the numbers are totally different: ",index,x);
            return;
        }
    }
}
function proverka(number1, number2) {
    while (number1 > 0) {
        var num2 = number2;
        var rezultat2 = number1 % 10;
        while (num2 > 0) {
            var rezultat2 = num2 % 10;
            if (rezultat === rezultat2) {
                console.log("numbers are the same");
                return false;
            }
            num2 = Math.floor(num2 / 10);
        }
        number1 = Math.floor(number1 / 10);
    }
    return true;

}
razlichni(100,124567890);