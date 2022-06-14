nose_x = 0;
nose_y = 0;
lh_x = 0;
rh_x = 0;
size_of_square = 0;

function preload(){
  
}

function setup(){
  canvas = createCanvas(350, 350);
  canvas.position(850, 200);
  camera = createCapture(VIDEO);
  camera.size(450, 350);
  camera.position(250, 200);
  poseNet = ml5.poseNet(camera, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function draw(){
  
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function gotPoses()