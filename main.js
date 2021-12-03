function preload(){

}
function setup(){
    video=createCapture(VIDEO);
  video.size(550,550);
canvas=createCanvas(550,500);
canvas.position(650,100);
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}
function draw(){
background("#00ccff");
}
function modelloaded(){
    console.log("model is loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}
