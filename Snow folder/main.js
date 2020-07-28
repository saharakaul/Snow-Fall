//SNOW FALLING
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
initGraphics(800, 600)

//Global variables
let snow = []
for (let n = 0; n<10; n++){
    snow.push({
        x: Math.randomDec(0, cnv.width), 
        y: Math.randomDec(0, cnv.height),
        r: Math.randomDec(2,5),
        speedX: Math.randomDec(-5, 8),
        speedY: Math.randomDec(10, 15)
    })
}


//Main Program Loop
requestAnimationFrame(draw);
function draw() {
    //Logic
    
    //Drawing 
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    //Draw snow
    for (let i = 0; i<snow.length; i++) {
        snow[i].x += snow[i].speedX;
        snow[i].y += snow[i].speedY;
        ctx.fillCircle(snow[i].x, snow[i].y, snow[i].r)
        ctx.fillStyle = "white";
        if(snow[i].y > cnv.height) {
            snow[i].x = Math.randomDec(0, cnv.width);
            snow[i].y = 0;
        }
        
    }
    requestAnimationFrame(draw);
}
//Key event
document.addEventListener("keydown", keyDownHandler)
function keyDownHandler(event) {
    if (event.code == "ArrowRight") {
        for (let n = 0; n<50; n++){
            snow.push({
                x: Math.randomDec(0, cnv.width), 
                y: Math.randomDec(0, cnv.height),
                r: Math.randomDec(2,5),
                speedX: Math.randomDec(-5, 8),
                speedY: Math.randomDec(10, 15)
            })
        }
    } else if(event.code =="ArrowLeft") {
        for (let n = 0; n<50; n++){
            snow.pop({
                x: Math.randomDec(0, cnv.width), 
                y: Math.randomDec(0, cnv.height),
                r: Math.randomDec(2,5),
                speedX: Math.randomDec(-5, 8),
                speedY: Math.randomDec(10, 15)
            })
        }
    }
}
