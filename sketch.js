function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  translate(200,200)
  rotate(-90)
 background(0)
  
  var hr = hour()
  var mn= minute()
  var sc=second()
 
  noFill()
  
  strokeWeight(5)
  push();
  stroke("green")
  var a = map(sc, 0, 60, 0, 360)
   arc(0,0,300,300, 0, a)
  rotate(a);
  line(0,0,115,0);
  pop();
  
  push();
  stroke("red")
  var b = map(mn,0,60,0,360);
  arc(0,0,280,280,0,b) 
  pop();
  
  push();
  stroke("blue");
  var c = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,c);
  pop();
}