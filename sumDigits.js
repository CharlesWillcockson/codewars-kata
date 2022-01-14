function sumDigits(number) {
    let sum = 0
    let numArr = number.toString().split('');
    let realNums = numArr.map(Number);
    for (let i = 0; i < realNums.length; i++){
            sum += realNums[i];
        }

    return sum;
}

console.log(sumDigits( 787));