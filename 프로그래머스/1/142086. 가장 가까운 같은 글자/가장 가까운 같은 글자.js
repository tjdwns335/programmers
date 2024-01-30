function solution(s) {
  let answer = [];
  let stack = []; // 검사 완료 목록
  for (let i = 0; i < s.length; i++) {
    if (stack.includes(s[i])) {
      answer.push(stack.length - stack.lastIndexOf(s[i]));
      stack.push(s[i]);
    } else {
      answer.push(-1);
      stack.push(s[i]);
    }
  }
  return answer;
}