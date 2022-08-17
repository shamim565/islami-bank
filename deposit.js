document.getElementById('deposit-btn').addEventListener('click', function () {


    const depositAmount = document.getElementById('deposit-amount');
    if (isNaN(parseFloat(depositAmount.value))) {
        alert('Please provide amount in number. ex. 1200');
        depositAmount.value = '';
        return;
    }
    else {
        const totalDeposit = document.getElementById('total-deposit');
        const deposit = parseFloat(totalDeposit.innerText) + parseFloat(depositAmount.value);
        console.log(parseFloat(depositAmount.value));

        totalDeposit.innerText = deposit;

        const totalBalance = document.getElementById('total-balance');
        const balance = parseFloat(totalBalance.innerText) + parseFloat(depositAmount.value);
        totalBalance.innerText = balance;
        depositAmount.value = '';
    }


});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-amount');
    if (isNaN(parseFloat(withdrawAmount.value))) {
        alert('Please provide amount in number. ex. 1200');
        withdrawAmount.value = '';
        return;
    }
    else {
        const totalWithdraw = document.getElementById('total-withdraw');
        const prevWithdraw = parseFloat(totalWithdraw.innerText);
        const newWithdraw = parseFloat(withdrawAmount.value);
        const withdraw = prevWithdraw + newWithdraw;

        const totalBalance = document.getElementById('total-balance');
        const balance = parseFloat(totalBalance.innerText) - parseFloat(withdrawAmount.value);
        withdrawAmount.value = ''
        if (newWithdraw > parseFloat(totalBalance.innerText)) {
            alert("Insufficient Balance!");
            return
        }
        totalWithdraw.innerText = withdraw;
        totalBalance.innerText = balance;

    }

});

