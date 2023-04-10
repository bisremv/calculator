for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    let char = this.innerHTML;
    enterNumOpr(char);
    displayAns();
  });
}
function displayAns() {
  let str = document.querySelector(".caculate").innerHTML;
  let result = eval(str);
  document.querySelector(".dis").innerHTML = result;
 
}
function enterNumOpr(num) {
  if (
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(parseInt(num)) ||
    ["-", "/", "+", "*"].includes(num)
  ) {
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(parseInt(num))) {
      document.querySelector(".caculate").textContent += num;
    }

    if (
      document.querySelector(".caculate").textContent != null &&
      ["-", "/", "+", "*"].includes(String(num))
    ) {
      document.querySelector(".caculate").textContent += num;
    }
  }
}
document.querySelector(".b").addEventListener("click", function () {
  if (document.querySelector(".caculate").textContent.length == 1||  document.querySelector(".caculate").textContent.length == 0 || document.querySelector(".dis").textContent.length == 1) {
    document.querySelector(".caculate").innerHTML = null;
    document.querySelector(".dis").textContent = null;
 
  }
  else {
    let var1 = document.querySelector(".caculate").innerHTML;
    document.querySelector(".caculate").innerHTML = var1.slice(0, -1);
    let result = eval(var1.slice(0, -1));
    document.querySelector(".dis").innerHTML = result;
  }
});
document.querySelector(".c").addEventListener("click", function () {
  if (document.querySelector(".dis").innerHTML != null) {
    document.querySelector(".caculate").innerHTML = null;
    document.querySelector(".dis").innerHTML = null;
  }
});
document.querySelector("#eql").addEventListener("click", function () {
  let str = document.querySelector(".caculate").textContent;
let detect=0;
  for(let i=0; i<str.length;i++){
    if(["-", "/", "+", "*"].includes(str[i])){
      if(["-", "/", "+", "*"].includes(str[i+1])){
        if(!("*"==str[i+1]&&"*"==str[i])){
              detect++;
      }}
  }
}
 
  
  let save =
    document.querySelector(".caculate").innerHTML +
    "=" +
    document.querySelector(".dis").innerHTML;
  if (detect==0){
    document.querySelector(".his").innerHTML += " <P> " + save + "</P>";
    
  } 
  else if (detect=1)
  {
    document.querySelector(".caculate").textContent = "Error the input is incorect";
 
    document.querySelector(".dis").textContent = "Error the input is incorect"; 
  }
});