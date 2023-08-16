const checkPassword = () => {
  let pass = document.getElementById("user-password");

  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
};

document.getElementById("loginbtn").addEventListener("click", function () {
  let inputvalueEmail = getValueInputfieldfromlogin("user-email");
  let inputvaluepass = getValueInputfieldfromlogin("user-password");

  if (inputvalueEmail === "baperbank@gmail.com") {
    if (inputvaluepass === "abba taka den") {
      window.location.href = "bank.html";
    } else {
      document.getElementById("worng-pass").innerText =
        "You enter a wrong password !";
      setTimeout(() => {
        document.getElementById("worng-pass").innerText = "";
      }, 5000);
    }
  } else {
    document.getElementById("worng-email").innerText =
      "you enter invalid email!";
    setTimeout(() => {
      document.getElementById("worng-email").innerText = "";
    }, 5000);
  }
});
