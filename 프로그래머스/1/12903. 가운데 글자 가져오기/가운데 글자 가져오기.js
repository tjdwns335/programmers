function solution(s) {
    var answer = '';
    answer = s.length % 2 === 0 ? s[s.length / 2 - 1] + s[s.length / 2] : s[(s.length - 1) / 2];
    return answer;
}