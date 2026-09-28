const r = require("raylib");
const d1 = require("./d1");
const detector = require("./detector");
const { height } = require("./d1");
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


function changeColour(x, width, particle_x, particleWidth, particle2_x, particle2Width) {
    d1.colour = detector.isOverLapping(x, width, particle_x, particleWidth, particle2_x, particle2Width) ? r.RED : r.WHITE;
}

function update() {
    d1.velocity = detector.velocityPosition(d1.x, d1.width, WIDTH, d1.velocity)
    d1.x = detector.movingDetector(d1.x, d1.velocity)
    changeColour(d1.x, d1.width, particle1_x, particleWidth, particle2_x, particle2Width)

}
const particle1_x = 200;
const particleWidth = 50;

const particle2_x = 400;
const particle2Width = 20;
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    drawRange(particle1_x, 0, particleWidth, HEIGHT, r.SKYBLUE);
    drawRange(particle2_x, 0, particle2Width, HEIGHT, r.SKYBLUE)
    drawRange(d1.x, 0, d1.width, d1.height, d1.colour)
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