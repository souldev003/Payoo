document.getElementById("cashout-btn").addEventListener("click", function () {
  //Access to all id
  const agentNumber = document.getElementById("agent-number").value;
  const amountValue = document.getElementById("input-amount").value;
  const balanceText = document.getElementById("balance");
  const pin = document.getElementById("input-pin").value;

  //Make some logic here
  if (agentNumber.length !== 11) {
    alert("Invalid Number!");
    return;
  }

  if (pin !== "1234") {
    alert("Invalid Pin");
    return;
  }

  const amount = parseFloat(amountValue);
  const currentBalance = parseFloat(balanceText.innerText);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  if (amount > currentBalance) {
    alert("Insufficient Balance");
    return;
  }

  const newBalance = currentBalance - amount;
  balanceText.innerText = newBalance;
  alert(`${amount} Tk Withdraw Successful`);
});
