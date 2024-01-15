function solution(number) {
  var answer = 0;
  let nLen = number.length;
  for (let i = 0; i < nLen; i++) {
    for (let j = i + 1; j < nLen; j++) {
      for (let k = j + 1; k < nLen; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}