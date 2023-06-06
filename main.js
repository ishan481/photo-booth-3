mustacheX=0;
 mustacheY=0;  


function preload(){
    var mustache=loadImage('https://i.postimg.cc/ryj4nysx/2-2-moustache-png-file-thumb.png')

}

function setup(){
    canvas= createCanvas (300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    image(video,0,0,300,300);
}

function Take_snapshot(){
    save('image.png');
    image(mustache,mustacheX,mustacheY,30,30);
}

function modelLoaded(){
    console.log('poseNet is initialised');
}
function gotPoses(results){
    if( results.length > 0){
       console.log(results);
       noseX=results[0].pose.nose.x;
       noseY=results[0].pose.nose.y;
       console.log("mustachex=" + mustache.x);
       console.log("mustachey=" + mustache.y);

    }
}