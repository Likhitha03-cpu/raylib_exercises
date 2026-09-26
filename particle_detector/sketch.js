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
let scanner_x = 0;
let scanner_y = 0;
const scannerWidth = 40;
const scannerHeight = HEIGHT;
const scannerColour = r.WHITE;

function update() {
    scanner_x = scanner_x + horizontal_direction;
    if (scanner_x + scannerWidth >= WIDTH || scanner_x <= 0) {
        horizontal_direction = - horizontal_direction;
    }
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    const particleField_x = 200;
    const particleField_y = 0;
    const particleWidth = 100;
    const particleColour = r.BLUE;
    r.DrawRectangle(particleField_x, particleField_y, particleWidth, scannerHeight, particleColour);
    r.DrawRectangle(scanner_x, scanner_y, scannerWidth, scannerHeight, scannerColour);
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
