// In this kata, you are asked to square every digit of a number and concatenate them.
//
//     For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    const numArr = num.toString().split('');
    const squareArr = numArr.map(x => x*x);
    const squaredNum = squareArr.join('');
    return squaredNum;
}

console.log(squareDigits(9119));