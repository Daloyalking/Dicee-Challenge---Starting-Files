function diceButton() {
    var randomNumber1;
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImages1 = "dice" + randomNumber1 + ".png";
    var randomimagesSrc1 = "images/" + randomImages1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomimagesSrc1);
    //Second Image
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImages2 = "dice" + randomNumber2 + ".png";
    var randomimagesSrc2 = "images/" + randomImages2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomimagesSrc2);

    //If condition
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}