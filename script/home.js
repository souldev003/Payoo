//Access Pin User Logged in.
// const userPin = localStorage.getItem("userPin");

//CashOut Section
document.getElementById("cash-out-btn").addEventListener("click", function () {
  //Access to all id
  const agentNumber = document.getElementById("agent-number").value;
  const agentNumberNumeric = Number(agentNumber);
  const amountValue = document.getElementById("input-amount").value;
  const balanceText = document.getElementById("balance");
  const pin = document.getElementById("input-pin").value;
  const userPin = localStorage.getItem("userPin");

  //Make some logic here
  if (
    agentNumber.length !== 11 ||
    isNaN(agentNumberNumeric) ||
    !agentNumber.startsWith("01")
  ) {
    alert("Invalid Number!");
    return;
  }

  if (pin !== userPin) {
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

  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();

  const transactionDiv = document.getElementById("transaction-div");
  const newTransaction = document.createElement("div");
  newTransaction.innerHTML = `<div class="bg-white flex items-center gap-4 p-4 rounded-xl">
    <div class="bg-[#F4F5F7] p-3 rounded-full">
        <img src="./assets/opt-1.png" alt="Transaction logo">
    </div>
    <div>
        <p class="">${amount} Tk Cash Out Successful to ${agentNumber} (Agent Number).</p>
        <p class="text-sm">On ${date} at ${time}</p>
    </div>
    </div>`;

  transactionDiv.append(newTransaction);
});

//Add Money Section
document.getElementById("add-money-btn").addEventListener("click", function () {
  //Access All elements we need
  const bankStatus = getValueFromInput("bank-selection");
  const bankAccNum = getValueFromInput("bank-acc-number");
  const bankAccNumNumeric = Number(bankAccNum);
  const addMoneyAmount = getValueFromInput("add-money-amount");
  const addMoneyAmountNumeric = Number(addMoneyAmount);
  const pin = getValueFromInput("add-money-pin");
  const balance = getBalance("balance");
  const userPin = localStorage.getItem("userPin");

  //Adding Logic to all elements

  if (bankStatus === "Select Bank") {
    alert("Please Select A Bank");
    return;
  } else if (bankAccNum.length != 11 || isNaN(bankAccNumNumeric)) {
    alert("Invalid Bank Account Number");
    return;
  } else if (pin !== userPin) {
    alert("Invalid Pin");
    return;
  } else if (isNaN(addMoneyAmountNumeric) || addMoneyAmountNumeric < 200) {
    alert("Invalid Amount");
    return;
  } else {
    const newBalance = Number(balance) + Number(addMoneyAmount);
    alert(`${addMoneyAmount} Tk Successfully Added from ${bankStatus} Bank`);
    document.getElementById("balance").innerText = newBalance;

    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    const transactionDiv = document.getElementById("transaction-div");
    const newTransaction = document.createElement("div");
    newTransaction.innerHTML = `<div class="bg-white flex items-center gap-4 p-4 rounded-xl">
    <div class="bg-[#F4F5F7] p-3 rounded-full">
        <img src="./assets/opt-1.png" alt="Transaction logo">
    </div>
    <div>
        <p class="">${addMoneyAmountNumeric} Tk Successfully added from ${bankStatus} Bank. Your Bank Account Number is: ${bankAccNum}</p>
        <p class="text-sm">On ${date} at ${time}</p>
    </div>
    </div>`;

    transactionDiv.append(newTransaction);
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
    const userPin = localStorage.getItem("userPin");

    if (
      isNaN(transferAccountNumber) == true ||
      transferAccountNumberInput.length != 11 ||
      !transferAccountNumberInput.startsWith("01")
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
    } else if (pin !== userPin) {
      alert(`${pin} is not valid Pin.`);
      return;
    } else {
      const newBalance = balanceNumber - transferAmount;
      alert(`${transferAmount} Taka transfer Successful.`);
      document.getElementById("balance").innerText = newBalance;

      const now = new Date();
      const time = now.toLocaleTimeString();
      const date = now.toLocaleDateString();

      const transactionDiv = document.getElementById("transaction-div");
      const newTransaction = document.createElement("div");
      newTransaction.innerHTML = `<div class="bg-white flex items-center gap-4 p-4 rounded-xl">
    <div class="bg-[#F4F5F7] p-3 rounded-full">
        <img src="./assets/opt-1.png" alt="Transaction logo">
    </div>
    <div>
        <p class="">${transferAmount} Tk Successfully sent to ${transferAccountNumberInput}.</p>
        <p class="text-sm">On ${date} at ${time}</p>
    </div>
    </div>`;

      transactionDiv.append(newTransaction);
    }
  });

//Get Bonus section
document.getElementById("get-bonus-btn").addEventListener("click", function () {
  const mainBalance = document.getElementById("balance").innerText;
  const bonusCoupon = document.getElementById("bonus-coupon-number").value;

  const couponTk = bonusCoupon.slice(4);
  const couponValue = Number(couponTk);

  if (bonusCoupon.length != 7 || !bonusCoupon.startsWith("pyo-")) {
    alert("invalid coupon");
    return;
  } else {
    const newBalance = Number(mainBalance) + couponValue;
    alert(`${couponValue} Tk added to your account.`);
    document.getElementById("balance").innerText = newBalance;

    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    const transactionDiv = document.getElementById("transaction-div");
    const newTransaction = document.createElement("div");
    newTransaction.innerHTML = `<div class="bg-white flex items-center gap-4 p-4 rounded-xl">
    <div class="bg-[#F4F5F7] p-3 rounded-full">
        <img src="./assets/opt-1.png" alt="Transaction logo">
    </div>
    <div>
        <p class="">${couponValue} Tk Successfully added to your Account.</p>
        <p class="text-sm">On ${date} at ${time}</p>
    </div>
    </div>`;

    transactionDiv.append(newTransaction);
  }
});

//Pay Bill Section
document.getElementById("pay-bill-btn").addEventListener("click", function () {
  const payBillSelection = document.getElementById("pay-bill-selection").value;
  const payBillAccount = document.getElementById("payBill-acc-number").value;
  const payBillAccountNumber = Number(payBillAccount);
  const payBillAmountInput = document.getElementById("pay-bill-amount").value;
  const payBillAmountNumeric = Number(payBillAmountInput);
  const payBillPin = document.getElementById("pay-bill-pin").value;
  const userPin = localStorage.getItem("userPin");
  const balance = document.getElementById("balance").innerText;
  const balanceNumeric = Number(balance);

  if (payBillSelection == "Select Bill") {
    alert(`Please Select Bill You Want to pay`);
    return;
  } else if (
    payBillAccount.length != 11 ||
    isNaN(payBillAccountNumber) ||
    !payBillAccount.startsWith("01")
  ) {
    alert(`${payBillAccount} is not valid account.`);
    return;
  } else if (
    payBillAmountNumeric >= balanceNumeric ||
    isNaN(payBillAmountNumeric) ||
    payBillAmountNumeric < 100
  ) {
    alert("Invalid Amount");
    return;
  } else if (payBillPin !== userPin) {
    alert(`${payBillPin} is not Valid Pin.`);
    return;
  } else {
    alert(
      `${payBillAmountNumeric} Tk Successfully paid for ${payBillSelection}`,
    );
    const newBalance = balanceNumeric - payBillAmountNumeric;
    document.getElementById("balance").innerText = newBalance;

    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    const transactionDiv = document.getElementById("transaction-div");
    const newTransaction = document.createElement("div");
    newTransaction.innerHTML = `<div class="bg-white flex items-center gap-4 p-4 rounded-xl">
    <div class="bg-[#F4F5F7] p-3 rounded-full">
        <img src="./assets/opt-1.png" alt="Transaction logo">
    </div>
    <div>
        <p class="">${payBillAmountNumeric} Tk Successfully paid for ${payBillSelection}.</p>
        <p class="text-sm">On ${date} at ${time}</p>
    </div>
    </div>`;

    transactionDiv.append(newTransaction);
  }
});
