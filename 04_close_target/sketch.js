const r = require("raylib");
const mathUtils = require("./mathUtils.js")
const WIDTH = 500;
const HEIGHT = 700;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const title = "Scale-centerRectangle";
    const fps = 60;

    r.InitWindow(WIDTH, HEIGHT, title);
    r.SetTargetFPS(fps);
}

function draw() {
    r.ClearBackground(r.BLACK);
    const x = 20, y = 300, radius = 20;
    const x1 = 330, y1 = 250, radius1 = 20;
    const x2 = 450, y2 = 350, radius2 = 20;
    const nearest = mathUtils.findcloser(x, y, x1, y1, x2, y2);
    r.DrawCircle(x, y, radius, r.WHITE);
    r.DrawCircle(x1, y1, radius1, r.WHITE);
    r.DrawCircle(x2, y2, radius2, r.WHITE);

    if (nearest === 0) {
        r.DrawLine(x, y, x1, y1, r.WHITE);
    } else if (nearest === 1) {
        r.DrawLine(x, y, x2, y2, r.WHITE);
    } else {
        r.DrawLine(x, y, x1, y1, r.WHITE);
        r.DrawLine(x, y, x2, y2, r.WHITE);
    }

    r.EndDrawing();
}


function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    draw,
    teardown,
};