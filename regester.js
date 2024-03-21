let nam = document.getElementById("inputName");
let email = document.getElementById("inputEmail4");
let pass = document.getElementById("inputPass1");
let add = document.getElementById("inputAddress");
let brnch = document.getElementById("inputBranch");
let gender = document.getElementById("inputGender");

function registerUser() {
  let userData = {
    name: nam.value,
    username: email.value,
    password: pass.value,
    address: add.value,
    branch: brnch.value,
    gender: gender.value,
  }
  saveData(userData);
  clearFeild();
  open("LoginForm.html");
}

function clearFeild() {
  nam.value = "";
  email.value = "";
  pass.value = "";
  add.value = "";
  brnch.value = "";
  gender.value = "";
}

function saveData(userData) {
  localStorage.setItem("userInfo", JSON.stringify(userData));
}

