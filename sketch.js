var canvas;
let colors 
let brush
let toggle = false
let radius 

function colorPalette() {
    let colors = {}
    colors.red = color('#E55A2E')
    colors.orange = color('#E5BC4B')
    colors.yellow = color('#FEED61')
    colors.lime = color('#DAEC5E')
    colors.green = color('#3F864D')
    colors.azure = color('#5B8FEB')
    colors.turquoise = color('#58B2B0')
    colors.blue = color('#3260B2')
    colors.black = color(0)
    return colors
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    // canvas.position(0,0);
    // canvas.style('z-index', '-5');
    canvas.parent("myContainer"); 
    noStroke()
    colors = colorPalette()
  brush = colors.orange
  radius = 0.5;
  
  }
  

function mousePressed() {
    toggle = true
  }
  
  function mouseReleased() {
    toggle = false
  }

  function draw() {
    noStroke()
 
     
 
   if (toggle) {
    brush = colors.green;
    fill(red(brush), green(brush), blue(brush), 3)
    let radius = 75
    circle(mouseX, mouseY+random(10), radius * random(0.5));
    circle(mouseX+random(10), mouseY, radius * random(0.5));
    circle(mouseX, mouseY+random(10), radius * random(0.5));
    circle(mouseX+random(10), mouseY, radius * random(0.5));
  }else {
    brush = colors.red;
    fill(red(brush), green(brush), blue(brush),3)
    let radius = 75;
    circle(mouseX, mouseY+random(10), radius * random(0.5));
    circle(mouseX+random(10), mouseY, radius * random(0.5));
    circle(mouseX, mouseY+random(10), radius * random(0.5));
    circle(mouseX+random(10), mouseY, radius * random(0.5));
  }
   
   
  }