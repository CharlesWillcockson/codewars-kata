

function findOdd(A){
    for (let i = 0; i < A.length; i++){
        const count = A.filter(value => value === A[i]).length;
        if (count % 2 == 1){
            return A[i];
        }
    }
    return 0;
}

console.log(findOdd([1, 1, 2, 2, 3, 3, 3, 3]));