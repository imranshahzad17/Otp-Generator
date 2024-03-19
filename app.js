let randomvalue = "1234567890";
let btn = document.querySelector("button")
let inp = document.querySelector(".input")
let password = "";

for(let i = 0; i < 4 ; i++){
  let randomnum = Math.floor(Math.random() * randomvalue.length);
  password += randomvalue[randomnum];
  btn.addEventListener("click",function(){
    btn.innerHTML ="OTP Generated"
    inp.value = password;
  })
}