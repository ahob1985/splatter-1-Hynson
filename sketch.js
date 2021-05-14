// Author: Elijah Hynson

let canvasDiv;

let canvas;

let buttonDiv;

let clearButton;

let triButton;

let circButton;

let sliderDiv;

let slider;

let minSpan;

let maxSpan;

function setup() {
  //create canvas UI
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  background(65,60,88);
  canvas.mousePressed(drawSplatter);
  canvas.parent(canvasDiv);
  
  //create button UI
  buttonDiv = createDiv();
  clearButton = createButton("Clear Canvas");
  clearButton.mousePressed(function() {
    background(65,60,88);
  });
  clearButton.parent(buttonDiv);
  
  // Triangle button
  buttonDiv = createDiv();
  triButton = createButton("Triangle Pattern");
  triButton.mousePressed(function() {
    canvas.mousePressed(drawTriSplatter);
  });
  triButton.parent(buttonDiv);
  
   // Circle button
  buttonDiv = createDiv();
  circButton = createButton("Circle Pattern");
  circButton.mousePressed(function() {
    canvas.mousePressed(drawSplatter);
  });
  circButton.parent(buttonDiv);
  
  //create slider UI
  sliderDiv = createDiv();
  minSpan = createSpan("Min");
  minSpan.parent(sliderDiv);
  slider = createSlider(0, 100, 50, 1);
  slider.parent(sliderDiv);
  
}



function draw() {

}



function drawEllipse() {
  fill("red");
  ellipse(mouseX, mouseY, 100);
}



function drawTriSplatter(){
  fill(random(100, 256), random(100, 256), random(100, 256));
  noStroke();
  let ellipses = random(1, 5);
  let spread = slider.value();
  for (let i = 0; i < ellipses; i++) {
    let randomSize = random(5, 15);
    let randomX = random(mouseX - spread, mouseX + spread + 1);
    let randomY = random(mouseY - spread, mouseY + spread + 1);
    let randomX2 = random(mouseX - spread, mouseX + spread + 1);
    let randomY2 = random(mouseY - spread, mouseY + spread + 1);
    let randomX3 = random(mouseX - spread, mouseX + spread + 1);
    let randomY3 = random(mouseY - spread, mouseY + spread + 1);
      triangle(randomX, randomY, randomX2, randomY2, randomX3, randomY3, randomSize);
    
  }
}

function drawSplatter(){
  fill(random(100, 256), random(100, 256), random(100, 256));
  noStroke();
  let ellipses = random(10, 15);
  let spread = slider.value();
  for (let i = 0; i < ellipses; i++) {
    let randomSize = random(5, 15);
    let randomX = random(mouseX - spread, mouseX + spread + 1);
    let randomY = random(mouseY - spread, mouseY + spread + 1);
      ellipse(randomX, randomY, randomSize);
    
  }
}