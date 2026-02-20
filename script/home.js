//CashOut Section
document.getElementById("cash-out-btn").addEventListener("click", function () {
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

//Add Money Section
document.getElementById("add-money-btn").addEventListener("click", function () {
  //Access All elements we need
  const bankStatus = getValueFromInput("bank-selection");
  const bankAccNum = getValueFromInput("bank-acc-number");
  const addMoneyAmount = getValueFromInput("add-money-amount");
  const pin = getValueFromInput("add-money-pin");
  const balance = getBalance("balance");

  //Adding Logic to all elements

  if (bankStatus === "Select Bank") {
    alert("Please Select A Bank");
    return;
  } else if (bankAccNum.length != 11) {
    alert("Invalid Bank Account Number");
    return;
  } else if (pin !== "1234") {
    alert("Invalid Pin");
    return;
  } else {
    const newBalance = Number(balance) + Number(addMoneyAmount);
    alert(`${addMoneyAmount} Tk Successfully Added from ${bankStatus} Bank`);
    document.getElementById("balance").innerText = newBalance;
  }
});

//Transfer money section

document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function () {
    //Access to the account number and checking validity.
    const transferAccountNumberInput = document.getElementById(
      "transfer-account-number",
    ).value;
    const transferAccountNumber = Number(transferAccountNumberInput);

    //Access to the Amount and Checking Validity.
    const transferAmountInput =
      document.getElementById("transfer-amount").value;
    const transferAmount = Number(transferAmountInput);

    //Access to the Balance.
    const balance = document.getElementById("balance").innerText;
    const balanceNumber = Number(balance);

    //Access pin number
    const pin = document.getElementById("transfer-pin").value;

    if (
      isNaN(transferAccountNumber) == true ||
      transferAccountNumberInput.length != 11
    ) {
      alert("Invalid Account Number");
      return;
    } else if (
      isNaN(transferAmount) == true ||
      transferAmount >= balanceNumber ||
      transferAmount < 200
    ) {
      alert(`Invalid Amount. ${transferAmountInput} isn't a valid Amount`);
      return;
    } else if (pin !== "1234") {
      alert(`${pin} is not valid Pin.`);
      return;
    } else {
      const newBalance = balanceNumber - transferAmount;
      alert(`${transferAmount} Taka transfer Successful.`);
      document.getElementById("balance").innerText = newBalance;
    }
  });
