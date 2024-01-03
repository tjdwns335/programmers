function solution(a, b) {
    var answer = 0;
    let aString = a.toString();
    let bString = b.toString();
    let result = aString + bString;
    answer = Number(result) > 2 * a * b ? Number(result) : 2 * a * b;
    return answer;
}