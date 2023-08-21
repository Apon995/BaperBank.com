const getValueInputfieldfromlogin = (fieldId) => {
  let value = document.getElementById(fieldId).value;

  return value;
};

//bank page value access ;

const getValueInputfrombankpage = (Elementid) => {
  let value = document.getElementById(Elementid).value;
  document.getElementById(Elementid).value = "";
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

const SaveDeposit = (elementId) => {
  let deposit = document.getElementById(elementId).innerText;
  deposit = parseFloat(deposit);
  localStorage.setItem("depositBalance", deposit);
};
const Savewithdraw = (elementId) => {
  let withdraw = document.getElementById(elementId).innerText;
  withdraw = parseFloat(withdraw);
  localStorage.setItem("withdrawBalance", withdraw);
};
const SaveTotal = (elementId) => {
  let total = document.getElementById(elementId).innerText;
  total = parseFloat(total);
  localStorage.setItem("TotalBalance", total);
};

const getDeposit = () => {
  document.getElementById("currentdeposit").innerText =
    localStorage.getItem("depositBalance");
};
const getWithdraw = () => {
  document.getElementById("withdrawAmount").innerText =
    localStorage.getItem("withdrawBalance");
};
const getTotal = () => {
  document.getElementById("currentbalance").innerText =
    localStorage.getItem("TotalBalance");
};

getDeposit();
getWithdraw();
getTotal();
