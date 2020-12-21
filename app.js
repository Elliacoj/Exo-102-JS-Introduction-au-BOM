let button = document.getElementById("button");

button.addEventListener("click", function (){
    let features = "menubar=no, width=500, height=300, status=no, toolbar=no"
    let myWindows = window.open("https://www.google.com","", features);

    myWindows.resizeBy(400, 100);
    myWindows.moveBy(200,100)

    document.getElementById("button2").addEventListener("click", () => myWindows.close())

});