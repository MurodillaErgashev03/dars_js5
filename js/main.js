const elResult = document.querySelector("#result");
const elInput = document.querySelector("#age");
const elBtn = document.querySelector("#btn");



elBtn.addEventListener("click", function () {
  let num = elInput.value;
  let idf = false;

  for( let i = 2; i < num; i++){
    if( num % i == 0){
      idf = true;
    }
  }
  if(idf){
    elResult.textContent = "son tub emas";
  }
  else{
    elResult.textContent = "son tub";
  }
  

 
});






console.log(elInput);



