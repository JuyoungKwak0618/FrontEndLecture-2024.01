// 1. 완전수(perfect number)
// 자기 자신을 제외환 약수의 합과 자기자신이 같은 수
//6 = 1 + 2 + 3
//28 = 1 + 2 + 4 + 7 + 14

let a = []
let sum = 0

for(let i=1; i<=10000; i++){
    for(let k=1; k < i; k++){
        if(i % k == 0){
        if(i == k)
        break;
        sum+=k;
    }
}
    if(sum == i)
        a.push(sum);
    sum = 0;

}
console.log(a);
    
    



//2. a + b + c = 1000을 만족하는 피타고라스 수 (단, a < b < c)
for (let a = 1; a < 1000; a++){
    for ( let b = a + 1; b < 1000; b++){
        c = 1000 - a -b;
        if(a*a + b*b == c*c){
            console.log(a,b,c);
            process.exit(0);                //프로그램 실행을 종료
        }
    }
}
    




//1.A
for (let i = 2; i <= 10000; i++){
    let divSum = 0;
    for(let k = 1; k < i; k++){             //1에서부터 자기자신 전까지
        if(i % k == 0)                      //약수의 합 구하기
            divSum += k;
    }
    if ( i == divSum)           //자기 자신을 제외한 약수의 합과 자기자신이 같으면
        console.log(i);
}