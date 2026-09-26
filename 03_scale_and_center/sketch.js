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
    let outerWidth = 200;
    let outerHeight = 300;
    let scaleWidth = 0.2;
    let scaleHeight = 0.2;
    let innerWidth = mathUtils.rectangleScaleDimension(outerWidth, scaleWidth);
    let innerHeight = mathUtils.rectangleScaleDimension(outerHeight, scaleHeight);

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