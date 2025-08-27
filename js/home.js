const bankAccountNumber = 12345678912;
const validPin = 1234;
// add money feature
document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();

    const bankName = document.getElementById('bank').value;
    const accountNumber = parseInt(document.getElementById('account-number').value);
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const pinNumber = parseInt(document.getElementById('add-pin').value);
    const availableAmount = parseInt(document.getElementById('available-balance').innerText);

    if (accountNumber.length < 11) {
        alert("Please, provide a valid bank account number!");
        return;
    }

    if (validPin !== pinNumber) {
        alert("Please, provide a valid pin number!");
        return;
    }

    if (bankAccountNumber !== accountNumber) {
        alert("Please, provide a valid bank account number!");
        return;
    }

    const totalNewAvailableBalance = availableAmount + addAmount;
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;

})
// cash out money
document.getElementById('btn-withdraw').addEventListener('click', function(e){
    e.preventDefault();

    const agentNumber = document.getElementById('agent-number').value;
    const amountWithdraw = parseInt(document.getElementById('withdraw-amount').value);
    const availableAmount = parseInt(document.getElementById('available-balance').innerText);
    const pinNumber = parseInt(document.getElementById('add-pin').value);
    
    if (agentNumber.length > 11) {
        alert('Please, provide a valid agent number!');
        return;
    }

    if (validPin !== pinNumber) {
        alert("Please, provide a valid pin number!");
        return;
    }
    const totalNewAvailableBalance = availableAmount - amountWithdraw;
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
    
    
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