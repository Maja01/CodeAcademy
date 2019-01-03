function iphone(broj,cena,taksa,costom) {
    var taksa = (cena * broj * costom) * (taksa/100);
    var costom = broj * cena * (costom/100);
    var vkupno = broj * cena + costom + taksa;
    console.log(vkupno);
}
iphone(5,900,18,5);