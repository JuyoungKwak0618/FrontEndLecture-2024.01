let a = Math.ceil(Math.random() * 6)
let b = Math.ceil(Math.random() * 6)
let c = Math.ceil(Math.random() * 6)
let prize = 0;

if(a == b && b ==c){
    prize = 10000 + a * 1000;
}
else if(a == b || a ==c){
    prize = 1000 + a *100
}
else if(b == c){
    prize = 1000 + b *100
}
 /*else if(a == c){
    prize = 1000 + a *100
}*/ else{
  let maxDice = a > b ? a : b;
  maxDice = maxDice > c ? maxDice : c;
  //let maxDice =Math.max(a,b,c);
  prize = maxDice *100;
}
console.log(`${a}, ${b}, ${c} --> ${prize}원`);