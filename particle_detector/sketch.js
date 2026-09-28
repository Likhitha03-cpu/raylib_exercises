const r = require("raylib");
const d1 = require("./d1");
const calc = require("./calculation")
const WIDTH = 700;
const HEIGHT = 500;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const TITLE = "Particle-Detector";
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(60)
}

function drawRange(x, y, width, height, colour) {
    r.DrawRectangle(x, y, width, height, colour);
}


function update() {
    d1.velocity = calc.detectorVelocityPosition(d1.x, d1.width, WIDTH, d1.velocity);
    d1.x = calc.movingDetector(d1.x, d1.velocity);
}
const particle_x = 200;
const particleWidth = 50;

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    drawRange(particle_x, 0, particleWidth, HEIGHT, r.SKYBLUE);
    drawRange(d1.x, 0, d1.width, d1.height, r.WHITE)
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