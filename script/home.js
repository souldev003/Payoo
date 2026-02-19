document.getElementById("cashout-btn").addEventListener("click", function () {
  //Getting Agent Number and checking validity
  const agentNumberInput = document.getElementById("agent-number");
  const agentNumber = agentNumberInput.value;

  if (agentNumber.length !== 11) {
    alert("Invalid Number!");
    return;
  }

  //getting amount and checking validity
  const inputAmount = document.getElementById("input-amount");
  const amount = inputAmount.value;

  //Balance
  const balanceText = document.getElementById("balance");
  const balance = balanceText.innerText;

  const newBalance = Number(balance) - Number(amount);

  //getting pin and checking validity
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  if (pin !== 1234) {
    alert("Invalid Pin");
    return;
  }
});
