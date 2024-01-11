function solution(n) {
  let converted = '';
  while (n >= 3) {
    converted += (n % 3).toString();
    n = Math.floor(n / 3);
  }
  let result = n.toString();
  for (let i = converted.length - 1; i >= 0; i--) {
    result += converted[i];
  }
  var answer = 0;
  for (let i = 0; i < result.length; i++) {
    answer += result[i] * (3 ** i);
  }
  return answer;
}