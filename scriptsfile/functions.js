// const letters = '0123456789ABCDEF';
//       let color = '#';

//       for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
// console.log(color);

// login-field-input-value-access
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
}

const setAmount = (setelementid, totalset)=>{
    let setamount = document.getElementById(setelementid);
    setamount.innerText = totalset; 

    return setamount;

}