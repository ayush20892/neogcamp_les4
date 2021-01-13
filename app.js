var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");

console.log(txtinput)

function clickEvetHandler() { 
  console.log("Clicked");
  console.log("INPUT", txtinput.value);
};

 btntranslate.addEventListener("click", clickEvetHandler)