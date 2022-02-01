let bgColor = 126;

function setup() {
    // Canvas size 400*400
    createCanvas(400, 400);
    textSize(50);
}

function draw() {
   cursor('yoshi_egg.cur');
    // Background color gray
    background(bgColor);
    text(`${key} ${keyCode}`, 50, 100);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    bgColor = 240;
    fill(0, 102, 153);


  } else if (keyCode === RIGHT_ARROW) {
    bgColor = 0;
    fill(255, 255, 255);
  }
}
