function my_dicti(){
    var BG = {
        title: "Mansions of Madness",
        Genre: "Co-op",
        Theme: "Horror",
        Creator: "Corey Konieczka",
    };
    delete BG.Creator;
    document.getElementById("dictionary").innerHTML=BG.Genre
    // document.getElementById("dictionary").innerHTML=BG.Creator
}