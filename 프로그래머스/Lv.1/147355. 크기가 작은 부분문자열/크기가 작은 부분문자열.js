function solution(t, p) {
    var answer = 0;
    for (let i = 0; i < t.length - p.length + 1; i++) {
    let temp = t.slice(i, i + p.length);
    if (parseInt(temp) <= parseInt(p)) {
      answer += 1;
    }
  }
    return answer;
}