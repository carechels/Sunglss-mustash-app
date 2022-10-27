noseX=0
noseY=0

function preload()
{
   sunglass_mustash = loadImage("https://i.postimg.cc/Njxbq13q/pngtree-glasses-mustache-png-image-2871925-removebg-preview.png") 
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x -75;
        noseY = results[0].pose.nose.y -85;
        console.log("Nose X=" + results[0].pose.nose.x)
         console.log("Nose Y=" + results[0].pose.nose.y)
    }
}

function draw()
{
    image(video, 0 , 0 , 400 , 400);
    image(sunglass_mustash, noseX , noseY , 150 , 170);

    
}

function take_snapshot() {
    save('myFilterImage.png');
}