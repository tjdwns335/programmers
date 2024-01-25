function solution(nums) {
  let answer = [];
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        number = nums[i] + nums[j] + nums[k];
        if (isPrime(number)) {
          answer.push(number);
        }
      }
    }
  }
  return answer.length;
}