function salaryTax(salary,craftsman) {
    if (craftsman) {
        if (salary <= 1000) {
            return salary * (5 / 100);
        }
        else {
            var tax5 = 1000 * (5 / 100);
            var tax10 = (salary - 1000) * (10 / 100);
            return tax5 + tax10;
        }
    }
    else {
        if (salary <= 1000) {
            return salary * (11 / 100);
        }
        else {
            var tax11 = 1000 * (11 / 100);
            var tax18 = (salary - 1000) * (18 / 100);
            return tax11 + tax18;
        }
    }
}
console.log(salaryTax(1500,true));