// const form = document.querySelector(".form");
// form.addEventListener("submit", (event)=>{
// event.preventDefault();
// })

// function generatePassword(event){
// 	var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()__+/!~";
// var password_length = 5;
// var password = "";

// 	for(var i=0; i<password_length; i++){
// 		var randomNumber = Math.floor(Math.random() * chars.length);
// 		password += chars.substring(randomNumber, randomNumber + 1);
// 	}
// 	document.getElementById("show_password").innerHTML = password;
// }

const password_range = document.getElementById("password_range");
const password_number = document.getElementById("password_number");

const useUppercase = document.getElementById("useUppercase");
const useLowercase = document.getElementById("useLowercase");
const useNumber = document.getElementById("useNumber");

password_range.addEventListener("input", rangeAndNumber);
password_number.addEventListener("input", rangeAndNumber);

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

/* Password Length & Password Number Collaboration */

function rangeAndNumber(e) {
  let value = e.target.value;
  password_range.value = value;
  password_number.value = value;
}

const submit_btn = document.getElementById("submit_btn");
submit_btn.addEventListener("click", generatePassword);

function generatePassword() {
  var password = "";

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "1234567890";
  // const symbol = "@#$%^&*()__+/!~";
  const allSelected = upperCase.concat(lowerCase, number);
  const upperLower = upperCase.concat(lowerCase);
  const upperNumber = upperCase.concat(number);
  const lowerNumber = lowerCase.concat(number);

  const show_password = document.getElementById("show_password").value;

  if (
    useUppercase.checked == true &&
    useLowercase.checked == true &&
    useNumber.checked == true
  ) {
    for (var i = 0; i < password_number.value; i++) {
      var randomNumber = Math.floor(Math.random() * allSelected.length);
      password += allSelected.substring(randomNumber, randomNumber + 1);
    }
  } else if (useUppercase.checked == true && useLowercase.checked == true) {
    for (var i = 0; i < password_number.value; i++) {
      var randomNumber = Math.floor(Math.random() * upperLower.length);
      password += upperLower.substring(randomNumber, randomNumber + 1);
    }
  } else if (useUppercase.checked == true && useNumber.checked == true) {
    for (var i = 0; i < password_number.value; i++) {
      var randomNumber = Math.floor(Math.random() * upperNumber.length);
      password += upperNumber.substring(randomNumber, randomNumber + 1);
    }
  } else if (useLowercase.checked == true && useNumber.checked == true) {
    for (var i = 0; i < password_number.value; i++) {
      var randomNumber = Math.floor(Math.random() * lowerNumber.length);
      password += lowerNumber.substring(randomNumber, randomNumber + 1);
    }
  } else if (useUppercase.checked == true) {
    for (var i = 0; i < password_number.value; i++) {
      var randomNumber = Math.floor(Math.random() * upperCase.length);
      password += upperCase.substring(randomNumber, randomNumber + 1);
    }
  } else if (useLowercase.checked == true) {
    for (var i = 0; i < password_number.value; i++) {
      var randomNumber = Math.floor(Math.random() * lowerCase.length);
      password += lowerCase.substring(randomNumber, randomNumber + 1);
    }
  } else if (useNumber.checked == true) {
    for (var i = 0; i < password_number.value; i++) {
      var randomNumber = Math.floor(Math.random() * number.length);
      password += number.substring(randomNumber, randomNumber + 1);
    }
  } else {
    alert("Field is emptry now");
  }

  document.getElementById("show_password").value = password;
}

/* if field is empty */

/* copy command & show prompt */

const hidden = document.getElementById("hidden");
const copy_pass = document.getElementById("copy_pass");
const ShowC = document.getElementById("showC");

copy_pass.addEventListener("click", copyTextValue);
// hidden.style.display="block";

function copyTextValue() {
  if (show_password.value == "") {
    alert("Field is emptry now");
  } else {
    const copyText = document.getElementById("show_password");
    copyText.select();
    document.execCommand("copy");
    showCode.innerText = copyText.value;
    hidden.style.display = "block";
  }
}

// hide popup message of copied password

const hidePopup = () => {
  window.location.reload(true);
};

/* if you don't take input or text area field and you take another tag like p,h1,etc..
then you have to do like this. */

// function copyTextValue(){
//   const copyText = document.getElementById("show_password");
//   const showCode = document.getElementById("showCode");
//   var temp = document.createElement("input");
// document.body.appendChild(temp);
// temp.value= copyText.innerText;
// temp.select();
// document.execCommand("copy");
// showCode.innerText = temp.value;
// hidden.style.display = "block";
// document.body.removeChild(temp);
// }
