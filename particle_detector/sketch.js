const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

const WIDTH = 700;
const HEIGHT = 500;
const TITLE = "Particle-detector";
function setup() {
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(60);
}
let horizontal_direction = 1;
let x_axis = 0;
let y_axis = 0;
const rect_Width = 40;
const rect_Height = HEIGHT;
const rect_Colour = r.WHITE;

function update() {
    x_axis = x_axis + horizontal_direction;
    if (x_axis + rect_Width >= WIDTH || x_axis <= 0) {
        horizontal_direction = - horizontal_direction;
    }
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(x_axis, y_axis, rect_Width, rect_Height, rect_Colour);
    update();
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
    update,
};
