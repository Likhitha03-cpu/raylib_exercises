const r = require("raylib");
const d1 = require("./d1");
const WIDTH = 700;
const HEIGHT = 500;
const TITLE = "Particle-Detector";

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(60)
}

function drawRange(x, y, width, height, colour) {
    r.DrawRectangle(x, y, width, height, colour);
}
function isdetectorOutOfBound() {
    return d1.x + d1.start > WIDTH || d1.x < 0;
}
function detectorVelocityPosition() {
    return isdetectorOutOfBound() ? - d1.velocity : d1.velocity
}

function update() {
    d1.velocity = detectorVelocityPosition();
    d1.x = d1.x + d1.velocity;
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    drawRange(d1.x, 0, d1.start, d1.height, r.WHITE)
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