function solution(my_string, is_suffix) {
    var answer = 0;
    let sliceStr = my_string.slice(my_string.length - is_suffix.length);
    if (sliceStr === is_suffix) {
        answer = 1;
    }
    return answer;
}