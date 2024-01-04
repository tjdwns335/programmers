function solution(n) {
    var answer = [];
    let nString = n.toString();
    for (let i = nString.length - 1; i >= 0; i--) {
        answer.push(Number(nString[i]))
    }
    return answer;
}