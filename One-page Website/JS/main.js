// fade

document.body.classList.add("fade-out");

window.addEventListener("DOMContentLoaded",() =>{
  document.body.classList.remove("fade-out");
});

//form validation
function validate(){
  let x = document.forms["emailForm"]["fname"].value;
  if(x==""){
    alert("please fill out everything");
    return false;
  }
}

// probably a better way but I'm taking the simplest
function validate2(){
  let x = document.forms["messageForm"]["test"].value;
  if(x==""){
    alert("please fill out everything");
    return false;
  }
}

// Popup Form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}