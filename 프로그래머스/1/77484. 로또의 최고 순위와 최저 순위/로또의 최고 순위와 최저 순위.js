function solution(lottos, win_nums) {
  let answer = [];
  let zero = [];
  let temp = [];
  for (let i = 0; i < 6; i++) {
    if (lottos[i] === 0) {
      zero.push(lottos[i]);
    } else {
      for (let j = 0; j < 6; j++) {
        if (lottos[i] === win_nums[j]) {
          temp.push(lottos[i]);
        }
      }
    }
  }
  if (temp.length === 0 && zero.length === 0) {
    return [6, 6]
  }

  //최고 순위 계산하기 (lottos의 0값이 당첨번호와 모두 일치하는 경우)
  answer[0] = 7 - (temp.length + zero.length);

  //최저 순위 계산하기 (lottos의 0값이 당첨번호와 모두 일치 하지 않는 경우)
  if (temp.length >= 2) {
    answer[1] = 7 - (temp.length);
  } else {
    answer[1] = 6;
  }
  return answer;
}