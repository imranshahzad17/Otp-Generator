let btn =document.querySelector(".btn")
btn.addEventListener("click", function() {
  let input = document.querySelectorAll(".input");
  let generatedOTP = generateOTP();
  input.forEach((input, index) => {
    input.value = generatedOTP[index];
  });
});
function generateOTP() {
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}