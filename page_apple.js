
img_apple="";
status1="";
function preload(){
    img_apple= loadImage('apple.jpg');
   
 }
 function setup(){
     canvas=createCanvas(580,360);
     canvas.center();
     objectDetector=ml5.objectDetector('cocossd',modelLoaded);
     document.getElementById("status").innerHTML="Status: Detecting Objects";
 }
 function draw(){
     image(img_apple,0,0,580,360);
     fill("#FF0000");
     text('Laptop',135,15);
     noFill();
     stroke("#FF0000");
 rect(130,10,350,355);
 }
 function back(){
    window.location="index.html";
}
function modelLoaded(){
    console.log("Model Loaded");
    status1=true;
    objectDetector.detect(img_apple,gotResult);
    }
    function gotResult(error,results){
    if(error){
        console.log(error)
    }
    else{
    console.log(results)
    }
    }