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
let scannerColour = r.WHITE;
const particleField_x = 200;
const particleField_y = 0;
const particleWidth = 100;

function detectParticle() {
    if (
        scanner_x + scannerWidth >= particleField_x &&
        scanner_x <= particleField_x + particleWidth
    ) {
        scannerColour = r.RED;
    } else {
        scannerColour = r.WHITE;
    }
}

function update() {
    scanner_x = scanner_x + horizontal_direction;
    if (scanner_x + scannerWidth >= WIDTH || scanner_x <= 0) {
        horizontal_direction = - horizontal_direction;
    }
    detectParticle();
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    const particleColour = r.BLUE;
    r.DrawRectangle(particleField_x, particleField_y, particleWidth, scannerHeight, particleColour);
    r.DrawRectangle(scanner_x, scanner_y, scannerWidth, scannerHeight, scannerColour);
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
