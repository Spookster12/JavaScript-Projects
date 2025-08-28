var x = 10;

function add_number1(){
    var x=99;
    document.write(10+x+"<br>");
}

function add_number2(){
    document.write(x+11);
    console.log(x);
}

add_number1();
add_number2();

function get_date(){
    if(new Date().getHours()<18){
        document.getElementById("greet").innerHTML="it's before 6pm";
    }
}

function get_reply(){
    var user_input = document.getElementById("userinput").value;
    if (user_input % 2 ===0){
        reply="even";
        document.getElementById("feedback").innerHTML=reply;
    }
    else {
        reply = "odd";
        document.getElementById("feedback").innerHTML=reply;
    }
}

function time_fun(){
    var time=new Date().getHours();
    var Reply;
    if (time <12 == time >0){
        Reply = "morning";
    } else if (time >=12 == time <18){
        Reply = "afternoon";
    } else {
        Reply = "evening"
    }
    document.getElementById("time_of_day").innerHTML = Reply;
}