function solution(a, b) {
    var answer = 1234567890;
    answer = a.map((a, i) => a * b[i]).reduce((a, b) => a + b);
    return answer;
}