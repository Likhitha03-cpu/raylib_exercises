const r = require("raylib");
const mathUtils = require("./mathUtils")
const WIDTH = 900;
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
    let width = 300;
    let height = 200;
    const rectangle_x = mathUtils.rectangle(WIDTH, width);
    const rectangle_y = mathUtils.rectangle(HEIGHT, height);

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(rectangle_x, rectangle_y, width, height, r.WHITE);
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