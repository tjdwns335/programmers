function solution(my_string, is_prefix) {
    var answer = 0;
    let sliceStr = my_string.slice(0, is_prefix.length);
    if (sliceStr === is_prefix) {
        answer = 1;
    }
    return answer;
}