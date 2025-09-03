function strcon(){
    var pt1 = "testing the";
    var pt2 = "concat function";
    var sentence = pt1.concat(pt2);
    document.getElementById("concat").innerHTML = sentence;
}

function strslice(){
    var sent = "here is the full sentence that I will be slicing";
    var sent1 = sent.slice(10, 20);
    document.getElementById("slice").innerHTML = sent1;

}

function strstring(){
    var int =123;
    document.getElementById("string").innerHTML = int.toString();

}

function precision(){
    var lgint = 12345.09876;
    document.getElementById("round").innerHTML=lgint.toPrecision(6);

}