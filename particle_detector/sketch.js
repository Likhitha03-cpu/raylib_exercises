const r = require("raylib");

// Window Dimensions
const WIDTH = 900;
const HEIGHT = 700;
const TITLE = "Particle-detector";

// First Scanner Dimensions

let firstScanner_x = 0;
let firstScanner_y = 0;
let firstScanner_direction = 1;

const firstScannerWidth = 40;
const firstScannerHeight = HEIGHT;
let firstScannerColour = r.WHITE;


let secondScanner_x = WIDTH / 2;
let secondScanner_y = 0;
let secondScanner_direction = 1;

const secondScannerWidth = 40;
const secondScannerHeight = HEIGHT;
let secondScannerColour = r.WHITE;

// First Particle field Dimensions
const firstParticleField_x = 300;
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

function detectFirstParticle() {
    const touchesFirst =
        firstScanner_x + firstScannerWidth >= firstParticleField_x &&
        firstScanner_x <= firstParticleField_x + firstParticleWidth;

    if (touchesFirst) {
        firstScannerColour = r.RED;
    } else {
        firstScannerColour = r.WHITE;
    }
}

function detectSecondParticle() {
    const touchesSecond =
        secondScanner_x + secondScannerWidth >= secondParticleField_x &&
        secondScanner_x <= secondParticleField_x + secondParticleWidth;

    if (touchesSecond) {
        secondScannerColour = r.RED;
    } else {
        secondScannerColour = r.WHITE;
    }
}

function updateFirstScanner() {
    firstScanner_x += firstScanner_direction;

    if (
        firstScanner_x + firstScannerWidth >= WIDTH / 2 ||
        firstScanner_x <= 0
    ) {
        firstScanner_direction = -firstScanner_direction;
    }

    detectFirstParticle();
}


function updateSecondScanner() {
    secondScanner_x += secondScanner_direction;
    if (
        secondScanner_x + secondScannerWidth >= WIDTH ||
        secondScanner_x <= WIDTH / 2
    ) {
        secondScanner_direction = -secondScanner_direction;
    }

    detectSecondParticle();
}


function update() {
    updateFirstScanner();
    updateSecondScanner();
}



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

    r.DrawRectangle(
        firstScanner_x,
        firstScanner_y,
        firstScannerWidth,
        firstScannerHeight,
        firstScannerColour
    );

    r.DrawRectangle(
        secondScanner_x,
        secondScanner_y,
        secondScannerWidth,
        secondScannerHeight,
        secondScannerColour
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

