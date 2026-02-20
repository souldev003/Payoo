document.getElementById("login-btn").addEventListener("click", function () {
  //Get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;

  const contactNumericNumber = Number(contactNumber);

  //Get pin
  const pin = document.getElementById("input-pin").value;
  //to bypass NaN value of pin
  const pinNumeric = Number(pin);

  if (
    !contactNumber.startsWith("01") ||
    contactNumber.length != 11 ||
    isNaN(contactNumericNumber) == true
  ) {
    alert(`${contactNumber} is not Valid Number.`);
  } else if (pin.length != 4 || isNaN(pinNumeric) == true) {
    alert(`${pin} is Invalid`);
    return;
  } else {
    alert(`Login Successful`);
    window.location.assign("./home.html");
  }
});
