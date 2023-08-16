const Depositnow = () => {
    let depositinputfield = getValueInputfrombankpage("depositInput");
    if(isNaN(depositinputfield)){
        document.getElementById('depositerror').innerText ="amount type kor joldi!"
        setTimeout(() => {
            document.getElementById('depositerror').innerText = '';
        }, 5000);

        return;
    }
    let currentdeposit = getvalueofinnerText("currentdeposit");
    let currentbalance = getvalueofinnerText("currentbalance");

    let settotalbalance = currentbalance + depositinputfield;
    let settotal = currentdeposit + depositinputfield;

    setAmount("currentdeposit", settotal);
    setAmount("currentbalance", settotalbalance);
};


const WithdrawNow = () => {
    let Withdrawinputfield = getValueInputfrombankpage('withdrawInput')
    if(isNaN(Withdrawinputfield)){
        document.getElementById('errormsg').innerText ="amount type kor joldi!"
        setTimeout(() => {
            document.getElementById('errormsg').innerText = '';
        }, 5000);

        return;
    }
    let currentWithdraw = getvalueofinnerText('withdrawAmount');
    let total = currentWithdraw + Withdrawinputfield;
    let currentbalance = getvalueofinnerText("currentbalance");
    if (Withdrawinputfield <= currentbalance) {
        let currentbalancetotal = currentbalance - Withdrawinputfield;
        setAmount('currentbalance', currentbalancetotal);
        setAmount('withdrawAmount', total)

    }
    else {
        document.getElementById('errormsg').innerText ="Tor baper bank e Atto taka nai !"

        setTimeout(() => {
            document.getElementById('errormsg').innerText = '';
        }, 5000);
    }
}



const togglenav=(event)=>{
    event.name = event.name == "menu"?"close":"menu";

    document.querySelector('.opacity-0').classList.toggle('opacity-100');
}