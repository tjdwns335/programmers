function solution(x) {
    var answer = true;
    let add = 0;
    x = x.toString();
    for(let i = 0; i <x.length; i++){
        add += Number(x[i]);
    }
    if (x % add !== 0) {
        answer = false;
    }
    return answer;
}