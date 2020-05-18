var dice1 =document.querySelector(".img1");
var dice2=document.querySelector(".img2");
var p=document.querySelector(".result");
var response1,response2,response,result,stopVar;
var b=document.querySelector("#Start");
var r=document.querySelector("#Reset");
//scrambling
r.addEventListener("click",function(){
  stopVar=setInterval(function(){
  response=Math.floor((Math.random()*6)+1);
  response="images/dice"+response+".png";
  dice1.setAttribute("src",response);
  dice2.setAttribute("src",response);
},10);
})


b.addEventListener("click",function(){
  clearInterval(stopVar);
response1=Math.floor((Math.random() * 6) + 1);
response2=Math.floor((Math.random() * 6) + 1);
if(response2>response1){
  result=" Player 2 wins";
}
else if(response1>response2){
  result=" Player 1 wins";
}
else{
  result =" Draw"
}
response1="images\\dice"+response1+".png";
response2="images\\dice"+response2+".png";
dice1.setAttribute("src",response1);
dice2.setAttribute("src",response2);
p.innerHTML=result;
})
