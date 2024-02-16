function solution(X, Y) {
  let answer = '';
  X = X.split('');
  Y = Y.split('');
  for (let i = 0; i < 10; i++) {
    let XCount = X.filter(x => Number(x) === i).length;
    let YCount = Y.filter(y => Number(y) === i).length;
    answer += i.toString().repeat(Math.min(XCount, YCount));
  }
  if (answer === "") {
    return "-1";
  } else if (answer.split('').filter(i => i === "0").length === answer.length) {
    return "0";
  } else {
    return answer.split('').sort((a, b) => b - a).join('');
  }
}