const bankAccountNumber = 12345678912;
const validPin = 1234;
// reusable function to get input values
function getInputValueNumber(id) {

    const inputFieldValueInt = parseInt(document.getElementById(id).value);
    return inputFieldValueInt;
    
}
// resuable function for not numbers
function getInputValue(id){
    const inputFieldValue = document.getElementById(id).value;
    return inputFieldValue;
}
// resuable function to get innertext
function getInnerText(id){
    const elementValueNumber = parseInt(document.getElementById(id).innerText);
    return elementValueNumber;
}
// reusable function to set innerText
function setInnerText(value){
    const totalNewAvailableElement =  document.getElementById('available-balance');
    totalNewAvailableElement.innerText = value;
}
// add money feature
document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();

    const bankName = getInputValue('bank');
    const accountNumber = getInputValueNumber('account-number');
    const addAmount = getInputValueNumber('add-amount');
    const pinNumber = getInputValueNumber('add-pin');    

    const availableAmount = getInnerText('available-balance');

    if (accountNumber.length < 11) {
        alert("Please, provide a valid bank account number!");
        return;
    }

    if (pinNumber !== validPin) {
        alert("Please, provide a valid pin number!");
        return;
    }

    if (bankAccountNumber != accountNumber) {
        alert("Please, provide a valid bank account number!");
        return;
    }

    const totalNewAvailableBalance = availableAmount + addAmount;
    setInnerText(totalNewAvailableBalance);
})
// cash out money
    document.getElementById('btn-withdraw').addEventListener('click', function(e){
    e.preventDefault();

    const agentNumber = getInputValueNumber('agent-number');
    const amountWithdraw = getInputValueNumber('withdraw-amount');
    const availableAmount = getInnerText('available-balance');
    const pinNumber = getInputValueNumber('add-pin');
    
    if (agentNumber.length > 11) {
        alert('Please, provide a valid agent number!');
        return;
    }
    // if (validPin != pinNumber) {
    //     alert("Please, provide a valid pin number!");
    //     return;
    // }
    const totalNewAvailableBalance = availableAmount - amountWithdraw;
    setInnerText(totalNewAvailableBalance);
})
// toggle feature
document.getElementById('add-money-btn').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('add-money-parent').style.display = "block";
})
document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById('cash-out-parent').style.display = "block";
})