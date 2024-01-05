function solution(num_list) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0 || i === 0) {
      odd += num_list[i];
    } else if (i % 2 !== 0) {
      even += num_list[i];
    }
  }
  return odd > even ? odd : even;
}