for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    let char = this.innerHTML;
    enterNum(char);
    displayAns();
  });
}
function displayAns() {
  let str = document.querySelector(".caculate").innerHTML;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "/" ||
      str[i] == "*" ||
      str[i] == "-" ||
      str[i] == "+" ||
      str[i] == "="
    ) {
      count++;
    }
  }
  if (count < 1) {
    document.querySelector(".dis").innerHTML = str;
  } 
  else if (count > 0) {
  }

}
function checkForbr(str){
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
          while (i < str.length) {
            
          }
        }
      }

  
}
function checkFormul(str){
    for (let i = 0; i < str.length; i++) {
        let lastidx =0;
        
        if (
            str[i] == "-" ||
            str[i] == "+" ) {
                lastidx =i;
         
        }
        if (str[i] == "*") {
           
        }
      }
  
}
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function enterNum(num) {
  if (document.querySelector(".caculate").textContent == "") {
    document.querySelector(".dis").innerHTML = " ";
  }
  document.querySelector(".caculate").textContent += num;
}
