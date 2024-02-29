function solution(answers) {
  // 수포자들이 찍는 방식의 패턴과 채점표를 각각 배열로 변환
  const personOne = [1, 2, 3, 4, 5];
  const personTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  const personThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [0, 0, 0];
  const length = answers.length;
  // 배열 answers가 주어졌을 때, 문제를 맞힌 횟수를 각각 채점해 result 입력
  for (let i = 0; i < length; i++) {
    if (personOne[i % 5] === answers[i]) result[0]++;
    if (personTwo[i % 8] === answers[i]) result[1]++;
    if (personThree[i % 10] === answers[i]) result[2]++;
  }
  // 채점 결과, 가장 많은 문제를 맞힌 사람을 배열에 담아 return
  const answer = [];
  const max = Math.max(...result);
  for (let j = 0; j < result.length; j++) {
    if (result[j] === max) {
      answer.push(j + 1);
    }
  }

  return answer;
}