let email = document.getElementById("email");
let password = document.getElementById("pass");

function fetchLoginData() {

  let userCred = JSON.parse(localStorage.getItem("userData"));

  if (((email.value) == (userCred.email)) && ((password.value) == (userCred.password))) {

    open("Homepage.html");
  } else {
    alert("INVALID CREDENTIALS");
  }
}