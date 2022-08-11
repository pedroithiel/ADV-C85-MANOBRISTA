canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

carWidht = 100;
carHeigth = 150;


backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

carX = 10;
carY = 400;

function add() {
	backgroundImageTag = new Image();
    backgroundImageTag.onload = upload;
    backgroundImageTag.src = backgroundImage;

    greencarImageTag = new Image();
    greencarImageTag.onload = car();
    greencarImageTag.src = greencarImage;
}


function upload() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);

}

function car() {
    ctx.drawImage(greencarImageTag, carX, carY, carWidht, carHeigth);
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    teclaPressed = e.keyCode;
    console.log(teclaPressed)

    if (teclaPressed == "38") {
        up();
        console.log("cima");
    }

    if (teclaPressed == "39") {
        right();

        console.log("esquerda");
    }

    if (teclaPressed == "37") {
        left();
        console.log("direita");
    }

    if (teclaPressed == "40") {
        down();
        console.log("baixo");
    }

}
function up() {
    if (0 < carY) {
        carY = carY - 5;
        upload()
        car()
    }


}

function right() {
    if (1000  > carX) {
        carX = carX + 5;
        upload()
        car()
    }
}

function left() {
    if (0 < carX) {
        carX = carX - 5;
        upload()
        car()
    }
}

function down() {
    if (700 > carY) {
        carY = carY + 5;
        upload()
        car()
    }

}
