function solution(array, commands) {
  let answer = [];
  let temp = [];
  for (let i = 0; i < commands.length; i++) {
    temp = array.slice(commands[i][0] - 1, commands[i][1]);
    temp = temp.sort((a, b) => a - b);
    answer.push(temp[commands[i][2] - 1]);
  }
  return answer;
}