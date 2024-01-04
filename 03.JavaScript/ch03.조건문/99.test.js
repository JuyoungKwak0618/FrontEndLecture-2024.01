/* let H = Math.floor(Math.random() * 24 );
let M = Math.floor(Math.random() * 60 );
console.log(`${H} ${M}`);

if(M<45){
    M=60-45+M;
    H--;
}
else
    M-=45;

if(H==-1)
    H=23;

console.log(`${H} ${M}`);
 */
    

let hour = 6, minute = 30;
let newHour = 0, newMin = 0;

if(minute >= 45){
    newHour = hour;
    newMin = minute -45;
}else{
    if(hour == 0) {
        newHour = 23;
        newMin = minute + 60 - 45;
    }else{
        newHour = hour -1;
        newMin = minute + 60 -45;
    }
}
console.log(`${hour}시 ${minute}분 --> ${newHour}시 ${newMin}분`);