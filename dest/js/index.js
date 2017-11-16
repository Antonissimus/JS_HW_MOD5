"use strict";

// Задание 1

var countLength = document.querySelector("#countLength");
countLength.addEventListener('click', function () {
  var answer = document.querySelector(".ex1 .answer");
  var string = document.querySelector('.ex1 #string');
  var strLen = string.value.length;
  answer.innerHTML = 'Длина строки равна: ' + strLen;
});

// Задание 2

var showImg = document.querySelector("#showImg");
showImg.addEventListener('click', function () {
  var answer = document.querySelector(".ex2 .answer");
  var arrImgs = ['img/1.png', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg'];
  arrImgs.forEach(function (arrImg) {
    var img = document.createElement('img');
    img.src = arrImg;
    answer.appendChild(img);
  });
});

// Задание 3

var cutAdr = document.querySelector("#cutAdr");
cutAdr.addEventListener('click', function () {
  var answer = document.querySelector(".ex3 .answer");
  var string = document.querySelector('.ex3 #adrString').value;
  if (~string.indexOf("http://")) {
    answer.innerHTML = 'адрес: ' + string.substring(7);
  } else if (~string.indexOf("https://")) {
    answer.innerHTML = 'адрес: ' + string.substring(8);
  } else {
    answer.innerHTML = 'адрес: ' + string;
  }
});

// Задание 4

var cutAdr2 = document.querySelector("#cutAdr2");
cutAdr2.addEventListener('click', function () {
  var answer = document.querySelector(".ex4 .answer");
  var string = document.querySelector('.ex4 #adrString2').value;
  if (~string.indexOf("http://www.")) {
    answer.innerHTML = 'адрес: ' + string.substring(11);
  } else if (~string.indexOf("https://www.")) {
    answer.innerHTML = 'адрес: ' + string.substring(12);
  } else if (~string.indexOf("https://")) {
    answer.innerHTML = 'адрес: ' + string.substring(8);
  } else if (~string.indexOf("http://")) {
    answer.innerHTML = 'адрес: ' + string.substring(7);
  } else {
    answer.innerHTML = 'адрес: ' + string;
  }
});

// Задание 5
function trim(string) {
  var str = string;
  return str.replace(/^\s+|\s+$/g, "");
}

function validForm(password, email) {
  var pass = password;
  var mail = email;
  var pos = 0;
  var total = 0;
  while (true) {
    var foundPos = mail.indexOf('@', pos);
    if (foundPos == -1) break;
    pos = foundPos + 1;
    total++;
  }
  // alert(total);
  if (pass.length < 5) {
    return false;
  }
  if (~mail.indexOf(" ")) {
    return false;
  }
  if (total != 1) {
    return false;
  }
  return true;
}

var submitForm = document.querySelector("#submitForm");
submitForm.addEventListener('click', function () {
  var answer = document.querySelector(".ex5 .answer");
  var usrName = document.querySelector('.ex5 #usrName').value;
  var usrPass = document.querySelector('.ex5 #usrPass').value;
  var usrEmail = trim(document.querySelector('.ex5 #usrEmail').value);
  answer.innerHTML = validForm(usrPass, usrEmail);
});

// Задание 6

var printSymbol = function printSymbol() {
  var sym = document.querySelector('#symbol').value;
  var answer = document.querySelector(".ex6 .answer");
  var result = sym.charCodeAt(0);
  answer.innerHTML = result;
};

var getSimbolBtn = document.querySelector('.ex6 #getSymbol');
getSimbolBtn.addEventListener('click', printSymbol);