function solution(start, end_num) {
    var answer = [];
  let num =start - end_num;
  for (let i = 0; i <= num; i++) {
    answer[i] = start--;
  }
  return answer;
}