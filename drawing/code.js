function drawBackground(pen) {
    pen.fillStyle = "#aaaaaa";
    pen.fillRect(0, 0, 400, 400);
}

function drawSquare(pen, x, y) {
    pen.fillStyle = "red";
    pen.fillRect(x, y, 20, 20);
}

let pen1 = document.getElementById("c1").getContext("2d");
drawBackground(pen1);

// Draw diagonal line of red squares
for (let i = 0; i < 13; i++) {
    drawSquare(pen1, 10 + i * 30, 10 + i * 30);
}

let pen2 = document.getElementById("c2").getContext("2d");
drawBackground(pen2);

let i = 0;
while (i < 13) {
    let j = 0;
    while (j <= i) {
        drawSquare(pen2, 10 + j * 30, 10 + i * 30);
        j = j + 1;
    }
    i = i + 1;
}