for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    let char = this.innerHTML;
    enterNumOpr(char);
    displayAns();
    let save = char;
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
    if (document.querySelector(".caculate").textContent == null) {
      document.querySelector(".dis").innerHTML = " ";
    }
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(parseInt(num))) {
      document.querySelector(".caculate").textContent += num;
    }

    if (
      document.querySelector(".caculate").textContent != null &&
      ["-", "/", "+", "*"].includes(num)
    ) {
      document.querySelector(".caculate").textContent += num;
    }
  }
   
}
document.querySelector(".b").addEventListener("click", function () {
  let var1 = document.querySelector(".caculate").innerHTML;
   document.querySelector(".caculate").innerHTML= var1.slice(0,-1);
   let result = eval(var1.slice(0,-1));
  document.querySelector(".dis").innerHTML = result;
  });
document.querySelector(".c").addEventListener("click", function () {
  document.querySelector(".caculate").innerHTML=null;
    document.querySelector(".dis").innerHTML = null;
  
});
document.querySelector("#eql").addEventListener("click", function () {
  let save = document.querySelector(".caculate").innerHTML+"="+document.querySelector(".dis").innerHTML;
  document.querySelector(".his").innerHTML +=" <P> "+save+"</P>";
  document.querySelector(".caculate").innerHTML=null;
  document.querySelector(".dis").innerHTML = null;
  
});
