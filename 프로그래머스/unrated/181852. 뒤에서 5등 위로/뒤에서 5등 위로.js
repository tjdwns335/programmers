function solution(num_list) {
    var answer = [];
    var newArr = [];
    newArr = num_list.sort((a, b) => a - b);
    for (let i = 0; i < num_list.length-5; i++) { 
        answer[i] = newArr[i+5];
    }
    return answer;
}