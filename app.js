var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");


function clickEvetHandler() { 
  outputdiv.innerText = "lulululul " + txtinput.value;
};

 btntranslate.addEventListener("click", clickEvetHandler)