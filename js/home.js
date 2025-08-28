const bankAccountNumber = 12345678912;
const validPin = 1234;
const transactionData = [];
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
// reusable function to handle toggle
function handleToggle(id){
    const forms = document.getElementsByClassName('form');
    
    for (const form of forms) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}
// reusable function to toggle background
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName('btn-form');
    for (const btn of formBtns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300"); 
    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
    console.log(transactionData);
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

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
    console.log(transactionData);
    
})
// transactions
document.getElementById('btn-transactions').addEventListener('click', function(){
    const trasactionContainer = document.getElementById('transaction-container');
    trasactionContainer.innerHTML = "";

    for (const data of transactionData) {
        const div = document.createElement('div');
        div.innerHTML=`
            <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                    <div class="flex items-center">
                        <div class="bg-[#f4f5f7] p-3 rounded-full">
                            <img src="./assets/wallet.png" class="mx-auto" alt="">
                        </div>
                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.date}<p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
        `
        trasactionContainer.appendChild(div);
    }
    
})
// toggle feature
document.getElementById('add-money-btn').addEventListener('click', function(){
   
    handleToggle('add-money-parent');
    handleButtonToggle('add-money-btn');

})
document.getElementById('cash-out-btn').addEventListener('click', function(){
    
    handleToggle('cash-out-parent');
    handleButtonToggle('cash-out-btn');

})
document.getElementById('btn-transfer').addEventListener('click', function(){
    handleToggle('transfer-money-parent');
    handleButtonToggle('btn-transfer');
})
// get-bonus-parent
document.getElementById('btn-bonus').addEventListener('click', function(){

    handleToggle('get-bonus-parent');
    handleButtonToggle('btn-bonus');
})
// pay-bill-parent
document.getElementById('btn-pay-bill').addEventListener('click', function(){

    handleToggle('pay-bill-parent');
    handleButtonToggle('btn-pay-bill');

})
// transfer-money-parent
document.getElementById('btn-transactions').addEventListener('click', function(){

    handleToggle('transactions-money-parent');
    handleButtonToggle('btn-transactions');
})