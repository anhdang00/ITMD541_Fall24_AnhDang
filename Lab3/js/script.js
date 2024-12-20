
//take bill input
var billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);

//get selected currency
var dropdown = document.getElementById("currency");
var currency = "dollar";
var symbol = document.getElementsByClassName("currency-symbol");
symbol[0].innerHTML = "&#36 "; symbol[1].innerHTML = "&#36 ";
dropdown.addEventListener("change", ()=>{
    currency = dropdown.options[dropdown.selectedIndex].value;
    if (currency == "yen"){
        symbol[0].innerHTML = "&#165 "; symbol[1].innerHTML = "&#165 ";
    } else if(currency == "rupee"){
        symbol[0].innerHTML = "&#8377 "; symbol[1].innerHTML = "&#8377 ";
    }
    calculateTip();
});

//get input from slider
var slider = document.getElementById("tip-slider");
var tipPercent = document.getElementById("tip-percent");
tipPercent.innerHTML = slider.value;
slider.oninput = function(){
    tipPercent.innerHTML = this.value;
    calculateTip();
}

//calculate and display tip and total
var total = document.getElementById("total");
var tipAmount = document.getElementById("converted-tip");

function calculateTip(){
    var bill = billInput.value;
    var warning = document.getElementById("warning");
    
    if (isNaN(bill) || !(isFinite(bill))){
        warning.innerHTML="Please enter a valid amount.";
        return;
    }
    if(parseFloat(bill) < 0){
        warning.innerHTML="Amount cannot be negative.";
        return;
    }else{
        warning.innerHTML="";
    }
    //currency conversion
    bill = parseFloat(bill);
    if (currency == "yen"){
        bill = bill*149.34;
    } else if(currency == "rupee"){
        bill = bill*84.07;
    }

    var tip = bill * (parseFloat(slider.value)/100);
    var totalAmount = bill + tip;

    tipAmount.value = tip.toFixed(2);
    total.value = totalAmount.toFixed(2);
}

