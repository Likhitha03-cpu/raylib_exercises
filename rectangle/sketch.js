const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

const WIDTH = 700;
const HEIGHT = 500;
const TITLE = "Moving-Circle";
function setup() {
    r.InitWindow(WIDTH, HEIGHT, TITLE);
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE)
    const x = 100;
    const y = 100;
    const rect_Width = 50;
    const rect_Height = 70;
    const rect_Colour = r.RED;
    r.DrawRectangle(x, y, rect_Width, rect_Height, rect_Colour);
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
