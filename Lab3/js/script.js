
//get input from slider
var slider = document.getElementById("tip-slider");
var tipPercent = document.getElementById("tip-percent");

tipPercent.innerHTML = slider.nodeValue; 
slider.oninput = function(){
    tipPercent.innerHTML = this.va
}