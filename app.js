const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', function () {
    const email = document.getElementById('user-email');

    const password = document.getElementById('password');

    if (email.value === 'shamim.azad@quantanite.com' && password.value === '123') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid Password!')
    }

});

