var x =true;

document.write(typeof x);
document.write("<br>");

document.write("5"+5);
document.write("<br>");

document.write(5==5);
document.write("<br>");

x=1;
y=1;
document.write(x === y);
document.write("<br>");

document.write(6>5 && 7>6);
document.write("<br>");

document.write(6 < 5 || 7 < 6);
document.write("<br>");

function fun(){
    document.getElementById("test").innerHTML = !(1>2);
}