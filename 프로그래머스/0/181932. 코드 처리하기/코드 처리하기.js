function solution(code) {
  let answer = '';
  let mode = 0
  let temp = [];
  for (let i = 0; i < code.length; i++) {
    if (mode === 0) {
      if (code[i] === '1') {
        mode = 1;
      } else {
        if (i % 2 === 0) {
          temp.push(code[i]);
        }
      }

    } else {
      if (code[i] === '1') {
        mode = 0;
      } else {
        if (i % 2 !== 0) {
          temp.push(code[i]);
        }
      }
    }
  }
  answer = temp.join('');
  if (answer === "") {
    return "EMPTY";
  } else {
    return answer;
  }
}