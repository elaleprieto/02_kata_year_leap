export function YearLeap(number) {
    if(number % 100 === 0 && number % 400 !== 0) {
        return false;
    }

    return number % 4 === 0;
}

