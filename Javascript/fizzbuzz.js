for (i = 1;i <= 100;i++) {
    if (i%5 === i%3) {
        console.log("fizzbuzz");
    }
    else if (i%5) {
        console.log("buzz");
    }
    else if (i%3) {
        console.log("fizz");
    }
}