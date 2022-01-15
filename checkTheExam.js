// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
//
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
//
// If the score < 0, return 0.

function checkExam(answerKey, studentAnswers) {
    let score = 0;
    for (let i = 0; i < answerKey.length; i++){
        if (answerKey[i] === studentAnswers[i]){
            score += 4;
        }else if (studentAnswers[i] === ""){
            score -= 0;
        }else {
            score -= 1;
        }
    }
    if (score < 0){
        return score = 0;
    }else
    return score;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
