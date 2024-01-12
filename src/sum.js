
export const sum = (first, second) => {
    return first + second
}

export const sumAll = (numbers) => {
    let result = null;
    numbers.forEach(element => {
        result += element
    });
    return result;
}

export const calculate = (numbers, callback) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    callback(total);
}

export const calculateReturn = (numbers, callback) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return callback(total);
}