function solution(s, n) {
  let answer = "";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < s.length; i++) {
    let text = s[i];
    if (text === " ") {
      answer += " ";
      continue;
    }
    let temp = upper.includes(text) ? upper : lower;
    let index = temp.indexOf(text) + n;
    if (index >= temp.length) index -= temp.length;
    answer += temp[index];

  }
  return answer;
}