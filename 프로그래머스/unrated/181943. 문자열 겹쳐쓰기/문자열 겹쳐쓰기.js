function solution(my_string, overwrite_string, s) {
    var answer = '';
    let value = '';
    value = [...my_string]
    value.splice(s, overwrite_string.length, overwrite_string)
    
    answer = value.join('')
    return answer;
}
