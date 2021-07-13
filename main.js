img = "";
status = "";

    function preload() {
        img = loadImage('dog_cat.jpg');
    }

function setup() {
    canvas = createCanvas (650, 420);
    canvas.center();

    objectDectector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDectector.detect(img, gotResult);
}

function draw() {
    image(img, 0, 0, 640, 420); 
    fill("#800080");
    text("Dog", 45, 75);
    noFill();
    stroke("#800080");
    rect(30,60,450,350);

    fill("#800080");
    text("Cat", 320, 120);
    noFill();
    stroke("#800080");
    rect(300, 90, 270, 320);
}

function gotResult(error, results) {
    if (error) {
        console.log (error);
    }
    console.log (results);
}