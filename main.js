difference=0
leftWristX=0
rightWristX=0

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550)
    canvas.position(560,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#196b49');
    document.getElementById("font_size").innerHTML="size of the text will be = "+difference+"px"
    textSize(difference);
    fill("#fafbfc");
    text("net",60,300);
}

function modelLoaded(){
    console.log("posenet model is initialized");
}

function gotPoses(results){
    if(
        results.length>0    
    ){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        righWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);

    }
}