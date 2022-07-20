function preload(){
    mustache=loadImage('https://i.postimg.cc/brrbZCsD/mustache.png')
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, under_nose_x, under_nose_y, )
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
     
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function take_snapshot(){
    save('Mukund.png');
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        under_nose_x=results[0].pose.nose.x-40;
        under_nose_y=results[0].pose.nose.y-40;
        console.log("nose x=" +under_nose_x);
        console.log("nose y=" +under_nose_y);
    }
}

under_nose_x=0;
under_nose_y=0;