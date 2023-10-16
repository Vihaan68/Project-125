noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(460, 460);
    canvas.position(560, 80);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
    textSize(25);
    fill(255,0,0);
    text('Vihaan', 185, 90);
}

function modelLoaded(){
    console.log('posenet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX=" + noseX + " noseY= " + noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX=" + leftWristX + " rightWristX= " + rightWristX + " difference= " + difference);
        textSize(difference);
    }
}