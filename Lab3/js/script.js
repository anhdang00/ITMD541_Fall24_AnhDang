
//get input from slider
var slider = document.getElementById("tip-slider");
var tipPercent = document.getElementById("tip-percent");
tipPercent.innerHTML = slider.value;
slider.oninput = function(){
    tipPercent.innerHTML = this.value;
    calculateTip();
}

//take bill input
var billInput = document.getElementById("bill");

//calculate and display tip and total
var total = document.getElementById("total");
var tipAmount = document.getElementById("converted-tip");

function calculateTip(){
    var bill = parseInt(billInput.value);
    var tip = bill * (parseInt(slider.value)/100);
    var totalAmount = bill + tip;

    tipAmount.value = tip;
    total.value = totalAmount;
}