// Задание 1

const countLength = document.querySelector("#countLength");
countLength.addEventListener('click', function () {
  const answer = document.querySelector(".ex1 .answer");
  const string = document.querySelector('.ex1 #string');
  let strLen = string.value.length;
  answer.innerHTML = 'Длина строки равна: ' + strLen;

})

// Задание 2

const showImg = document.querySelector("#showImg");
showImg.addEventListener('click', function () {
  const answer = document.querySelector(".ex2 .answer");
  let arrImgs = [
    'img/1.png',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
  ]
  for (let i = 0; i < arrImgs.length; i++) {
    let img = document.createElement('img');
    let imgSrc = arrImgs[i];
    img.src = imgSrc;
    answer.appendChild(img);
  }
})

// Задание 3

const cutAdr = document.querySelector("#cutAdr");
cutAdr.addEventListener('click', function () {
  const answer = document.querySelector(".ex3 .answer");
  const string = document.querySelector('.ex3 #adrString').value;
  if (~string.indexOf("http://")) {
    answer.innerHTML = 'адрес: ' + string.substring(7);
  } else if (~string.indexOf("https://")) {
    answer.innerHTML = 'адрес: ' + string.substring(8);
  } else {
    answer.innerHTML = 'адрес: ' + string;
  }
})

// Задание 4

const cutAdr2 = document.querySelector("#cutAdr2");
cutAdr2.addEventListener('click', function () {
  const answer = document.querySelector(".ex4 .answer");
  const string = document.querySelector('.ex4 #adrString2').value;
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
})

// Задание 5
function trim(string) {
  let str = string;
  return str.replace(/^\s+|\s+$/g, "");
}

function validForm(password, email) {
  let pass = password;
  let mail = email;
  let pos = 0;
  let total = 0;
  while (true) {
    let foundPos = mail.indexOf('@', pos);
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

const submitForm = document.querySelector("#submitForm");
submitForm.addEventListener('click', function () {
  const answer = document.querySelector(".ex5 .answer");
  const usrName = document.querySelector('.ex5 #usrName').value;
  const usrPass = document.querySelector('.ex5 #usrPass').value;
  const usrEmail = trim(document.querySelector('.ex5 #usrEmail').value);
  answer.innerHTML = validForm(usrPass, usrEmail);

});

// Задание 6

let printSymbol = function () {
  let sym = document.querySelector('#symbol').value;
  let answer = document.querySelector(".ex6 .answer");
  let result = sym.charCodeAt(0)
  answer.innerHTML = result;
  }
  


let getSimbolBtn = document.querySelector('.ex6 #getSymbol');
getSimbolBtn.addEventListener('click', printSymbol);