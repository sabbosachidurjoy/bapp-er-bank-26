// step-1: add event  listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // stop-2: get the deposit amount from the deposit input field 
    // For input field use . value to the value inside the input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step-3: get the current deposet total 
    // for non-input(element other than input, textarea) use innerText to gety the text 
    const deposetTotslElement = document.getElementById('deposit-total');
    const previousdeposetTotalString = deposetTotslElement.innerText;
    const previousdeposetTotal = parseFloat(previousdeposetTotalString);

    // step-4: add numbers to set the total deposet 
    const currentDepositTotal = previousdeposetTotal + newDepositAmount;
    // set the deposit total 
    deposetTotslElement.innerText = currentDepositTotal;

    // step-5: get ballance current total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;


    //  step-7: clear the deposit field 
    depositField.value = '';
})