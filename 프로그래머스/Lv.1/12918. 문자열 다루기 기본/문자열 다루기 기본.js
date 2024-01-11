function solution(s) {
  if (!(s.length === 4 || s.length === 6)) {
    return false;
  }
  let answer = true;
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (!(ch >= 0 && ch <= 9)) {
      answer = false;
      break;
    }
  }
  return answer;
}