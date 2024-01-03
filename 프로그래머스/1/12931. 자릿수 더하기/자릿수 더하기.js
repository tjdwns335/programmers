function solution(n)
{
    var answer = 0;
    let arr = String(n);

    console.log('Hello Javascript');
  
    for (let i = 0; i < arr.length; i++) {
        answer += Number(arr[i]);
    }
    return answer;
}