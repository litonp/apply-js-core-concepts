function milesToKm(miles) {
    const km = miles * 1.609;
    return km;
}

const schoolMiles = 8;
const schoolKm = milesToKm(schoolMiles);
console.log(schoolKm);