
function myRayleigh() {
    var context;
    var dx = 4;
    var dy = 4;
    var y = 150;
    var x = 10;
    var color = "black";

    function draw() {
        context = myCanvas1.getContext('2d');
        context.clearRect(0, 0, 800, 800);
        context.beginPath();
        context.fillStyle = color;
        context.arc(x, y, 30, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
        if (x < 0 || x > 800
            dx = -dx;
            color = "black";
        }
        if (y < 0 || y > 600) {
            dy = -dy;
            color = "black";
        }
        x += dx;
        y += dy;
    }
    setInterval(draw, 25);
}

function get_random_color() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function myRaman() {
    var context;
    var dx = 4;
    var dy = 4;
    var y = 150;
    var x = 10;
    var color = get_random_color();

    function draw() {
        context = myCanvas2.getContext('2d');
        context.clearRect(0, 0, 800, 800);
        context.beginPath();
        context.fillStyle = color;
        context.arc(x, y, 30, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
        if (x < 0 || x > 800
            dx = -dx;
            color = get_random_color();
        }
        if (y < 0 || y > 600) {
            dy = -dy;
            color = get_random_color();
        }
        x += dx;
        y += dy;
    }
    setInterval(draw, 25);
}


