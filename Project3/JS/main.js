function ADD() {
    var add = 1+2;
    document.getElementById("add").innerHTML="1+2="+add;
}

function SUBTRACT() {
    var subtract = 2-1;
    document.getElementById("subtract").innerHTML="2-1="+subtract;
}

function mult() {
    var mlt = 3*3;
    document.getElementById("mlt").innerHTML="3*3="+mlt;
}

function Div() {
    var div = 9/3;
    document.getElementById("div").innerHTML="9/3="+div;
}

function rand() {
    document.getElementById("ran").innerHTML=Math.random()*100;
}

function modu() {
    var mod = 100%7;
    document.getElementById("mod").innerHTML="100%7="+mod;
}

function incr() {
    var value=document.getElementById("increment").innerHTML;
    value++;
    document.getElementById("increment").innerHTML=value;
}

function decr() {
    var value=document.getElementById("decrement").innerHTML;
    value--;
    document.getElementById("decrement").innerHTML=value;
}