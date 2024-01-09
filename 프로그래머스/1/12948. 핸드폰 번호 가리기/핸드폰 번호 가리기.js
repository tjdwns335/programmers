function solution(phone_number) {
  var answer = '';
  let n = phone_number.length
  answer = "*".repeat(n-4) + phone_number.slice(-4);
  return answer;
}