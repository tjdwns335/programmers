function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  let idx = m - 1;
  let box = Math.floor(score.length / m);
  for (let i = 0; i < box; i++) {
    answer += score[idx] * m;
    idx += m;
  }
  return answer;
}