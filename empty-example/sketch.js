var noiseScale=2;
var xoff = 0.0;

function setup() {
	function setup() {
  	song = loadSound('CIRCLE/2018_02_28_YEJIN_CHO_AUDIOPROJECT.MP3')
	createCanvas(700, 700);
	createCanvas(700, 700);
}

function draw() {
 	background(242,242,242); 
 	for (var x=1; x < width; x++) {
    var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);
    line(x, mouseY+noiseVal*0.02, x, height);
  }
  	  xoff = xoff + 0.09;
  	var n = noise(xoff) * width;
  	line(n, 0, n, height);
 	
 	noStroke(); 
 	fill(255,255,255);
 	smooth();
	ellipse(mouseX,mouseY,20,20); 

}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(242,242,242);
  } else {
    song.play();
    background(0,0,0);
  }
}

