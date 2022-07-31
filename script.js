'use strict';

let btn = document.getElementById('btn');
let peopleAmount = document.getElementById('peopleAmount').value = 1;

btn.addEventListener('click', function () {
    let bill = document.getElementById('billAmount').value;
    let peopleAmount = document.getElementById('peopleAmount').value;
    let tipAmount = bill <= 950 && bill >= 50 ? bill * 0.1 : bill < 50 ? bill * .2 : bill * .075;
    let tipPercentage = bill <= 950 && bill >= 50 ? 10 : bill < 50 ? 20 : 7.5;

    document.getElementById('tipPercent').value = tipPercentage;
    document.getElementById('tipAmount').value = Math.ceil(tipAmount);
    document.getElementById('totalBill').value = Math.ceil((parseFloat(bill) + parseFloat(tipAmount)) / parseFloat(peopleAmount));
    document.getElementById('totalBillRound').value = Math.ceil(((parseFloat(bill) + parseFloat(tipAmount)) / parseFloat(peopleAmount)) /10 ) *10;

    console.log(bill);
    console.log(tipAmount);
    console.log();
})