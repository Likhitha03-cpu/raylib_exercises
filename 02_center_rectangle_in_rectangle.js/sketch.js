const r = require("raylib");
const mathUtils = require("./mathUtils")
const WIDTH = 700;
const HEIGHT = 900;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const title = "Rentangle-in-Rectangle";
    const fps = 60;

    r.InitWindow(WIDTH, HEIGHT, title);
    r.SetTargetFPS(fps);
}

function draw() {
    let outerWidth = 300;
    let outerHeight = 300;
    let innerWidth = 200;
    let innerHeight = 200;

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(
        mathUtils.rectangleCoordinate(WIDTH, outerWidth),
        mathUtils.rectangleCoordinate(HEIGHT, outerHeight),
        outerWidth,
        outerHeight,
        r.WHITE,
    );
    r.DrawRectangle(
        mathUtils.rectangleCoordinate(WIDTH, innerWidth),
        mathUtils.rectangleCoordinate(HEIGHT, innerHeight),
        innerWidth,
        innerHeight,
        r.RED,
    );

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