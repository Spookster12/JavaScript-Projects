function age_checker(){
    var age = document.getElementById("age").value;
    var legal_age = age < 19 ?"you aren't old enough " : "you are old enough ";
    document.getElementById("drink").innerHTML = legal_age + "to drink"
}

function bg(genre,theme,players){
    this.bg_genre=genre;
    this.bg_theme=theme;
    this.bg_players=players;
}

var spirit_island = new bg("co-op","fantasy","1-4");

function my_fun(){
    document.getElementById("test").innerHTML = "spirit island is a " + spirit_island.bg_genre + " is also a " + spirit_island.bg_theme +" themed for "+spirit_island.bg_players;
}

function str_fun(){
    var start ="test";

    function adding(str) {
        start=start + " " + str;
    }
    adding("testing");
    document.getElementById("nest-fun").innerHTML=start;
}