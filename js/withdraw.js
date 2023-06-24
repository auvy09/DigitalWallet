document.getElementById('btn-withdraw').addEventListener('click', function () {
    const witdrawField = document.getElementById('withdraw-input');
    const withdrawFieldString = witdrawField.value;
    const withdrawBalanceInput = parseFloat(withdrawFieldString);
    console.log(withdrawBalanceInput);
    if (isNaN(withdrawBalanceInput)) {
        alert("Please enter valid number");
        return;
    }


    const withdrawAmount = document.getElementById("withdraw-amount");
    const withdrawAmountString = withdrawAmount.innerText;
    const withdrawBalance = parseFloat(withdrawAmountString);





    // wallet 
    // 
    // 


    const walletBalanceField = document.getElementById("wallet-amount");
    const walletBalanceString = walletBalanceField.innerText;
    const walletBallance = parseFloat(walletBalanceString);
    if (walletBallance < withdrawBalanceInput) {
        alert("not enough amount");
    }
    else {
        withdrawAmount.innerText = withdrawBalance + withdrawBalanceInput;
        walletBalanceField.innerText = walletBallance - withdrawBalanceInput;
    }








    witdrawField.value = '';
})