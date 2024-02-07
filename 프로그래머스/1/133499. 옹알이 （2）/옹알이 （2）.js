function solution(babbling) {
  let answer = 0;
  let temp = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    let baby = babbling[i];
    for (j = 0; j < temp.length; j++) {
      if (baby.includes(temp[j].repeat(2))) {
        break;
      }
      baby = baby.split(temp[j]).join(" ");
    }
    if (baby.split(" ").join("").length === 0) {
      answer += 1;
    }
  }

  return answer;
}