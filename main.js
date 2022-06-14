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
  square(nose_x, nose_y, size_of_square)
  stroke(223,97,111,255)
  fill(223,97,111,255)
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("rightHand x = " + results[0].pose.rightWrist.x);
        console.log("leftHand x = " + results[0].pose.leftWrist.x);
        lh_x = results[0].pose.leftWrist.x;
        rh_x = results[0].pose.rightWrist.x;
        size_of_square = Math.round(lh_x-rh_x);
        console.log("Size of square = " + size_of_square);
        document.getElementById("size1").innerHTML = "Width and Height of the Square = " + size_of_square;
    }
}