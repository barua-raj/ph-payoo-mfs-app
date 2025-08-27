const bankAccountNumber = 12345678912;
const validPin = 1234;
document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();

    const bankName = document.getElementById('bank').value;
    const accountNumber = parseInt(document.getElementById('account-number').value);
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const pinNumber = parseInt(document.getElementById('add-pin').value);

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

    const availableAmount = parseInt(document.getElementById('available-balance').innerText);
    const totalNewAvailableBalance = availableAmount + addAmount;
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;

})