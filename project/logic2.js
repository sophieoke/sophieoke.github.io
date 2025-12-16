let pen = document.getElementById("game").getContext("2d")

// SIZE OF SNAKE AND FOOD //
let box = 20

//GAME STATE //
let gameOver = false

// DRAWING //
function drawBackground() {
    pen.fillStyle = "#dddddd"
    pen.fillRect(0, 0, 400, 400)
}

function drawSnake() {
    pen.fillStyle = "green"
    pen.fillRect(snakeX, snakeY, box, box)
}

function drawFood() {
    pen.fillStyle = "red"
    pen.fillRect(foodX, foodY, box, box)
}

function drawGameOver() {
    pen.fillStyle = "black"
    pen.font = "24px Arial"
    pen.fillText("Game Over", 130, 200)
}

// snake //
let snakeX = 200
let snakeY = 200
let dx = 0
let dy = 0

// food //
let foodPositions = [
    { x: 100, y: 100 },
    { x: 300, y: 100 },
    { x: 300, y: 300 },
    { x: 100, y: 300 }
]
let nextFood = 0
let foodX = foodPositions[nextFood].x
let foodY = foodPositions[nextFood].y


document.addEventListener("keydown", move)
setInterval(loop, 220)


function move(event) {
    if (event.key === "w") {
        dx = 0; dy = -box
    }
    if (event.key === "s") {
        dx = 0; dy = box
    }
    if (event.key === "a") {
        dx = -box; dy = 0
    }
    if (event.key === "d") {
        dx = box; dy = 0
    }
}


function loop() {
    if (gameOver) {
        drawGameOver()
        return
    }

    snakeX = snakeX + dx
    snakeY = snakeY + dy

    // wall collision //
    if (
        snakeX < 0 || snakeX >= 400 ||
        snakeY < 0 || snakeY >= 400
    ) {
        gameOver = true
    }

    // food collision //
    if (snakeX === foodX && snakeY === foodY) {
    nextFood = nextFood + 1   // Move to the next food position
    
    if (nextFood >= foodPositions.length){
        nextFood = 0
    } // If we go past the last position, start over

    // Update the food coordinates
    foodX = foodPositions[nextFood].x
    foodY = foodPositions[nextFood].y
}
    drawBackground()
    drawFood()
    drawSnake()
}

