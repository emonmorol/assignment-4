function anaToVori(ana) {
    let vori = 0;
    vori = ana / 16;
    return vori;
}

let voriFromAna = anaToVori(64);
console.log(voriFromAna);