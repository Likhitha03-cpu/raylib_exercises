const r = require("raylib");
const mathUtils = require("./mathUtils")
const WIDTH = 500;
const HEIGHT = 700;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const title = "Center-Rectangle";
    const fps = 60;

    r.InitWindow(WIDTH, HEIGHT, title);
    r.SetTargetFPS(fps);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    const x1 = 300;
    const y1 = 300;
    const x2 = 300;
    const y2 = 360;
    const radius1 = 60;
    const radius2 = 60;

    let colour = mathUtils.chooseColour(x1, y1, x2, y2, radius1, radius2);

    r.DrawCircle(x1, y1, radius1, colour);
    r.DrawCircle(x2, y2, radius2, colour);
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