function whloop(){
    var x = 0;
    while (x < 10){
        ++x;
    }
    document.getElementById("wloop").innerHTML = x
}

function foloop(){
    var x = 0;
    var y = 10
    for (y in Range){
        x++
    }
    document.getElementById("floop").innerHTML = x
}

function fun_array(){
    let a = ["bird","plane","superman"];
    let i = Math.floor(Math.random()*a.length);
    let r = a[i];
    document.getElementById("array").innerHTML = "what is it " + r;
}