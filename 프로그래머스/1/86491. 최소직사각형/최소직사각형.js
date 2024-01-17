function solution(sizes) {
  let width = [];
  let height = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      width.push(sizes[i][0]);
      height.push(sizes[i][1]);
    } else {
      width.push(sizes[i][1]);
      height.push(sizes[i][0]);
    }
  }
  let widthMax = Math.max(...width);
  let heightMax = Math.max(...height);
  return widthMax * heightMax;
}