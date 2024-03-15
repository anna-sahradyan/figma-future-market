function calculateDateDigitSum(dateString) {
    const [day, month, year] = dateString.split('.');

    const daySum = calculateDigitSum(day);
    const monthSum = calculateDigitSum(month);
    const yearSum = calculateDigitSum(year);

    return daySum + monthSum + yearSum;
}

function calculateDigitSum(number) {
    const digits = Array.from(number.toString(), digit => parseInt(digit, 10));
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
    return sum;
}

const currentDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).split('/').reverse().join('.');


 export const sum = calculateDateDigitSum(currentDate);

