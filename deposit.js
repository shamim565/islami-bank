document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositAmount = document.getElementById('deposit-amount');
    const totalDeposit = document.getElementById('total-deposit');
    const deposit = parseFloat(totalDeposit.innerText) + parseFloat(depositAmount.value);
    totalDeposit.innerText = deposit;

    const totalBalance = document.getElementById('total-balance');
    const balance = parseFloat(totalBalance.innerText) + parseFloat(depositAmount.value);
    totalBalance.innerText = balance;
    depositAmount.value = '';
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-amount');
    const totalWithdraw = document.getElementById('total-withdraw');
    const withdraw = parseFloat(totalWithdraw.innerText) + parseFloat(withdrawAmount.value);
    totalWithdraw.innerText = withdraw;

    const totalBalance = document.getElementById('total-balance');
    const balance = parseFloat(totalBalance.innerText) - parseFloat(withdrawAmount.value);
    totalBalance.innerText = balance;
    withdrawAmount.value = '';
});

