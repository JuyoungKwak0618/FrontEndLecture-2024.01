let H = Math.floor(Math.random() * 24 );
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

    


