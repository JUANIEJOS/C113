function preload(){

}

function setup(){
canvas=createCanvas(630,480);
canvas.position(110,250);
camera=createCapture(VIDEO);
camera.hide();

color="";
}

function draw(){
image(camera,0,0,640,480);
tint(color);
noFill();
stroke("yellow")
circle(310,300,500);
fill("yellow")
ellipse(210,200,100,150);
ellipse(420,200,100,150)
arc(315, 400, 180, 180, 0, PI + QUARTER_PI, OPEN);
}

function take_snapshot(){
save("filter_image");

}