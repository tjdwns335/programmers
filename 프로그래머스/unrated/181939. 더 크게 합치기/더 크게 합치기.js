function solution(a, b) {
    var answer = 0;
    let countA = String(a);
    let countB = String(b);
    if (countA + countB < countB + countA) {
        answer = Number(countB + countA);
    } else {
        answer = Number(countA + countB);
    }
    return answer;
}