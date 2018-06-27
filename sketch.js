var w = 600;
var h = 600;
var bgc = 81;
var inc = 0.01;
var start = 0;

function setup() {
	createCanvas( w, h);
}

function draw() {
	background(bgc);
	stroke(255);
	noFill()
	beginShape();
	var xoff = start;
	for (var x = 0; x < w; x++) {
		stroke(255);
		var y = noise(xoff) * h;
		vertex(x, y);
		xoff += inc;
	}
	endShape();
	
	start += inc;
	
	//noLoop();
}
