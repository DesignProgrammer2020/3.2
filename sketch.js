let array = []; //empty array for mouseX and mouseY

function setup() {
  createCanvas(600, 600);
  //background(255);
  strokeWeight(3);
  noFill();
}

function draw(){
  if (mouseIsPressed) {
    array.push([mouseX, mouseY]);
    drawAnimal();
  }
}

function keyTyped() {
    if (key === 'r') {  //red stroke
      stroke(255, 0, 0);
    }
    if (key === 'g') {  //green stroke
      stroke(0, 180, 0);
    }
    if (key === 'b') {  //blue stroke
      stroke(0, 80, 235);
    }
    if (key === 's') {  //save image
      saveCanvas('drawing', 'png');
    }
  }

function drawAnimal(){


      beginShape();    //draw image in curvilinear lines
      //fill(150);
      for (let i = 0; i < array.length; i++) {
        curveVertex(array[i][0], array[i][1]);
      }
      endShape();

      //display the same image at a smaller scale
      push();
      translate(0.5*width, 0.5*height);
      beginShape();
      scale(0.5);
      for (let i = 0; i < array.length; i++) {
      curveVertex(array[i][0], array[i][1]);
      }

      endShape();
      pop();
}
