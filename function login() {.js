function login() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value

  if (username === "Imranzenithal" && password === "Imran123") {
    document.querySelector(".login-form").style.display = "none"
    document.querySelector(".profile-section").style.display = "block"
    document.querySelector(".marks-section").style.display = "block"
  } else {
    alert("Invalid username or password!")
  }
}

function logout() {
  document.querySelector(".profile-section").style.display = "none"
  document.querySelector(".marks-section").style.display = "none"
  document.querySelector(".login-form").style.display = "block"

  document.getElementById("username").value = ""
  document.getElementById("password").value = ""
}

function printResult() {
  window.print()
}
