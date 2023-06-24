document.getElementById('btn-diposit').addEventListener('click', function () {
    const depositfild = document.getElementById("deposit-input");
    const depositAmountString = depositfild.value;
    const depositAmount = parseFloat(depositAmountString);
    if (isNaN(depositAmount)) {
        alert("Please enter valid number");
        return;
    }
    console.log(depositAmount);
    const savingField = document.getElementById("saving-amount");
    const savingAmountString = savingField.innerText;
    const savingAmount = parseFloat(savingAmountString);
    const currentSavingAmount = depositAmount + savingAmount;
    savingField.innerText = currentSavingAmount;

    // wallet 
    // 
    // 

    const walletBalanceField = document.getElementById("wallet-amount");
    const walletBalanceString = walletBalanceField.innerText;
    const walletBallance = parseFloat(walletBalanceString);
    walletBalanceField.innerText = walletBallance + depositAmount;






    depositfild.value = '';
})