function solution(num_list) {
    var answer = 0;
    let temp = 1;
  num_list.forEach(element => {
    if (num_list.length >= 11) {
      answer += element;
    } else {
      temp *= element;
      answer = temp;
    }
  });
    return answer;
}