function solution(arr, queries) {
    let answer = [];
  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    let temp = arr.slice(s, e + 1);
    const filteredArray = temp.filter(num => num > k);

    if (filteredArray.length === 0) {
      answer.push(-1);
    } else {
      const minVal = Math.min(...filteredArray);
      answer.push(minVal);
    }
  }
  return answer;
}