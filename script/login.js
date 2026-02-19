document.getElementById("login-btn").addEventListener("click", function () {
  //Get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);
  //get the pin input
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log(pin);
  //match pin and mobile number
  if (contactNumber == "01878758877" && pin == "1234") {
    console.log(alert("Login Success"));
    window.location.assign("./home.html");
  } else {
    console.log(alert("Login Failed! Please Try Again"));
    return;
  }
  //if true alert and go homepage
  //false alert return
});
