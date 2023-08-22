const getValueInputfieldfromlogin = (fieldId) => {
  let value = document.getElementById(fieldId).value;

  return value;
};

//bank page value access ;

const getValueInputfrombankpage = (Elementid) => {
  let value = document.getElementById(Elementid).value;
  document.getElementById(Elementid).value = "";
  if (isNaN(value)) {
    return;
  }
  value = parseInt(value);

  return value;
};

const getvalueofinnerText = (innerId) => {
  let innervalue = document.getElementById(innerId).innerText;
  innervalue = parseInt(innervalue);

  return innervalue;
};

const setAmount = (setelementid, totalset) => {
  let setamount = document.getElementById(setelementid);
  setamount.innerText = totalset;
  return setamount;
};

const saveDeposit = (amount) => {
  localStorage.setItem("deposit", amount);
};

const saveWithdraw = (amount) => {
  localStorage.setItem("withdraw", amount);
};

const saveTotal = (amount) => {
  localStorage.setItem("total", amount);
};

const getDeposit = () => {
  let depositbalance = localStorage.getItem("deposit");
  setAmount("currentdeposit", depositbalance);
  if (depositbalance !== null) {
    depositbalance = parseInt(depositbalance);
    setAmount("currentdeposit", depositbalance);
    if (!isNaN(depositbalance)) {
      setAmount("currentdeposit", depositbalance);
    } else {
      setAmount("currentdeposit", "00");
    }
  } else {
    setAmount("currentdeposit", "00");
  }
};
getDeposit();

const getWithdraw = () => {
  let withdraw = localStorage.getItem("withdraw");
  setAmount("withdrawAmount", withdraw);
  if (withdraw !== null) {
    withdraw = parseInt(withdraw);
    setAmount("withdrawAmount", withdraw);
    if (!isNaN(withdraw)) {
      setAmount("withdrawAmount", withdraw);
    } else {
      setAmount("withdrawAmount", "00");
    }
  } else {
    setAmount("withdrawAmount", "00");
  }
};
getWithdraw();

const getTotal = () => {
  let total = localStorage.getItem("total");
  setAmount("currentbalance", total);
  if (total !== null) {
    total = parseInt(total);
    setAmount("currentbalance", total);
    if (!isNaN(total)) {
      setAmount("currentbalance", total);
    } else {
      setAmount("currentbalance", "00");
    }
  } else {
    setAmount("currentbalance", "00");
  }
};

getTotal();
