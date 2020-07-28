//GRAPHICS LIBRARY
//Requires a global cnv and ctx 

//Draw functions
function initGraphics() {
    ctx.fillTriangle = function (x1, y1, x2, y2, x3, y3) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2. y2);
        ctx.lineTo(x3, y3);
        ctx.fill()
    }
    ctx.strokeTriangle = function (x1, y1, x2, y2, x3, y3) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2. y2);
        ctx.lineTo(x3, y3);
        ctx.stroke();
    }
    ctx.fillCircle= function(x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2*Math.PI);
        ctx.fill();
    }
    ctx.fillCircle= function(x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2*Math.PI);
        ctx.fill();
    }
    ctx.line = function(x1, y1, x2, y2){
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}
