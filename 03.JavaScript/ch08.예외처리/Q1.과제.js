/* 1. 만 나이를 계산하세요.
   생년, 월 ,일을 변수로 설정해서 풀어보세요.계산하세요 */
      function bornage(birthday){
         let today = new Date();
         let bornday = new Date(birthday);
         let age = today.getFullYear() - bornday.getFullYear();

         let todayMonth = today.getMonth() + 1;
         let birthMonth = bornday.getMonth() + 1;

         if(todayMonth < birthMonth || todayMonth == birthMonth && today.getDate() < bornday.getDate() ){
            age--;
         }
         return age;

      }
      let date = new Date('1998-06-18')
      console.log(bornage(date))

   
   
   
   
   
   
      /*  2.백준도장 31090 참조
      다음의 사례에 대해서 Good/Bye를 출력하세요.
         2023,2024,...AbortController.2040

      단,조건에 맞는지를 확인해주는 함수 isDivsible(year)를 만들어서
      해결하세요. */
    function isDivsible(year) {
      if((year+1) % (year-2000) == 0)
         console.log(year, 'good')
      else
         console.log(year, 'bye')
   }

      for(i=2023; i<=2040; i++){
         isDivsible(i)
      } 
   

    
    
    
    
    
 /* 3. 어레이를 매개변수로 받아서 합의 제곱과 합의 차이를 구하는 함수를 만들고,
[24, 67, 45 ,97 ,43]의 결과를 출력하세요. */
function calculate(arr){
   let sum=0;
   let sum1 = 0;
   let sum2 = 0;
   for (let i = 0; i < arr.length; i++)
        sum += arr[i];
   
      sum1 = sum*sum

 for (let i = 0; i < arr.length; i++){
         sum2+= arr[i]*arr[i]
      }
      return sum1 - sum2
   }




 numArray = [24, 67, 45, 97, 43 ]
 console.log(calculate(numArray))