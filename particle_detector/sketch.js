const r = require("raylib");

// Window Dimensions
const WIDTH = 700;
const HEIGHT = 500;
const TITLE = "Particle-detector";

// Scanner Dimensions
let horizontal_direction = 1;
let scanner_x = 0;
let scanner_y = 0;

const scannerWidth = 40;
const scannerHeight = HEIGHT;
let scannerColour = r.WHITE;

// Particle field Dimensions
const particleField_x = 200;
const particleField_y = 0;
const particleWidth = 100;
const particleHeight = HEIGHT;
const particleColour = r.BLUE;


function running() {
    return !r.WindowShouldClose();
}


// Set up the window
function setup() {
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(60);
}


// Detect particle field
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


// Update scanner position
function update() {
    scanner_x = scanner_x + horizontal_direction;

    if (
        scanner_x + scannerWidth >= WIDTH ||
        scanner_x <= 0
    ) {
        horizontal_direction = -horizontal_direction;
    }

    detectParticle();
}


// Draw everything
function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    // Draw particle field
    r.DrawRectangle(
        particleField_x,
        particleField_y,
        particleWidth,
        particleHeight,
        particleColour
    );

    // Draw scanner
    r.DrawRectangle(
        scanner_x,
        scanner_y,
        scannerWidth,
        scannerHeight,
        scannerColour
    );

    update();

    r.EndDrawing();
}


// Close the window
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

