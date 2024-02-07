function solution(price, money, count) {
  let answer = -1;
  let result = 0;
  for (let i = 0; i <= count; i++) {
    result += price * i;
    if (result > money) {
      answer = result - money;
    } else {
      answer = 0;
    }
  }
  return answer;
}