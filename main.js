function setup() {
  createCanvas(windowWidth, windowHeight);
}

let x, y;
x = 0;y = 0;
let now = 0;

//let ox, oy

function draw() {
  background(0);
  
  //ox = x;
  //oy = y;
  
  x = noise(now)*width;
  y = noise(now+10)*height;
  
  circle(x, y, 30);
  //circle(ox, oy, 20);
  
  
  now += 0.01;
}