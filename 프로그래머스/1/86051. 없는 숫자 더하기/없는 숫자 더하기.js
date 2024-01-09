function solution(numbers) {
    var answer = 0;
    let result = 0;
    for (let i = 0; i < 10; i++) {
        answer += i;
    }
    for (let j = 0; j < numbers.length; j++) {
        result += numbers[j];
    }
    return answer = answer - result;
}