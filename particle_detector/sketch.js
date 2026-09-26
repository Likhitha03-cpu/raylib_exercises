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

// First Particle field Dimensions
const firstParticleField_x = 200;
const firstParticleField_y = 0;
const firstParticleWidth = 100;
const firstParticleHeight = HEIGHT;
const firstParticleColour = r.BLUE;

// Second Particle field Dimensions
const secondParticleField_x = 500;
const secondParticleField_y = 0;
const secondParticleWidth = 50;
const secondParticleHeight = HEIGHT;
const secondParticleColour = r.BLUE;

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
    const touchesFirst =
        scanner_x + scannerWidth >= firstParticleField_x &&
        scanner_x <= firstParticleField_x + firstParticleWidth;

    const touchesSecond =
        scanner_x + scannerWidth >= secondParticleField_x &&
        scanner_x <= secondParticleField_x + secondParticleWidth;

    if (touchesFirst || touchesSecond) {
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
        firstParticleField_x,
        firstParticleField_y,
        firstParticleWidth,
        firstParticleHeight,
        firstParticleColour
    );
    r.DrawRectangle(
        secondParticleField_x,
        secondParticleField_y,
        secondParticleWidth,
        secondParticleHeight,
        secondParticleColour
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

