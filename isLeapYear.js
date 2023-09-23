function isleapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isMyYearLeapYear = isleapYear(1933);
console.log('my year', isMyYearLeapYear);
const isHerYearLeapYear = isleapYear(1960);
console.log('her year', isHerYearLeapYear);