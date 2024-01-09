function solution(arr) {
  var answer = [];
  let len = arr.length;
  if (len <= 1) {
    answer = [-1];
  } else {
    let minNum = Math.min(...arr);
    let minIndex = arr.indexOf(minNum);
    arr.splice(minIndex, 1);
    answer = arr;
  }

  return answer;
}