// 연습문제
// 1.1에서 1000사이에 0은 몇번,1은 몇번,...,9는 몇번 사용되었는가?
// 12345678901011123131415...9991000

let numStr = '';
for(let i = 1; i<=1000; i++) {
    numStr += i;
}

//1이 몇번 사용되었나

console.log(numStr.replace(/[^1]/g, '').length);

for (let i = 0; i<= 9; i++){
let pattern = new RegExp('[^' + i +']','g');
    Count = numStr.replace(pattern, '').length;
    console.log(`${i}: ${Count}`);
}

// count 배열을 만들어 일일이 체크

let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

for(let i =0; i <numStr.length; i++){
    let num = Number(numStr[i]);
    countArr[num]++;
}
console.log(countArr)


//2. 디지털 시계, 00:00 ~23:59
// 하루동안 3이 표시되는 시간은 몇초인가?
sumSec = 0;
for(let h=0; h <= 23; h++){
    for(let m = 0; m < 60; m++){
        if(Math.floor(h / 10) == 3 || h % 10 == 3 || Math.floor(m / 10) == 3 || m % 10 == 3){
        sumSec += 60;
        }
    }
    
}
console.log(sumSec) 





//3. 두개의 세자리 수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?
function isPalindrome(num){
    let maximum = 0;
   for(let i =100; i<=999; i++){
    for(let k = 100; k<=999; k++){
        let num = i*k;
        let reversenum = num.split('').reverse().join('')
        if(num == reversenum){
            if(maximum < num){
                maximum = num
            }

        }
    }
   }
   return maximum
}
console.log(isPalindrome())


//4. C:\Workspace\WebProject\03.JavaScript\ch07.표준내장객체/04.String연습.js
//에서 파일명(04.string연습.js)만 출력하세요.