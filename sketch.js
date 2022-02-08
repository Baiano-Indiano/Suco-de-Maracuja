


var caixaItau



function setup() {
  createCanvas(400,400);

  caixaItau = createSprite(200,200,40,10);


}

function draw() 
{
  background(30);
  drawSprites();

  if (keyDown(RIGHT_ARROW)) {
    
    caixaItau.position.x += 5;

  }

  if (keyDown(LEFT_ARROW)) {
    
    caixaItau.position.x -= 5;

  }
  if (keyDown(UP_ARROW)) {
    
    caixaItau.position.y -= 5;

  }
  if (keyDown(DOWN_ARROW)) {
    
    caixaItau.position.y += 5;

  }
}




