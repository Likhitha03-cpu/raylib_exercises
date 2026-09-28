const r = require("raylib");
const screen = require("./screen");
const d1 = require("./d1");
const d2 = require("./d2");
const d3 = require("./d3");
const p1 = require("./p1");
const p2 = require("./p2");
const p3 = require("./p3");
const detector = require("./detector");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, screen.TITLE);
    r.SetTargetFPS(60)
}

function drawRange(x, y, width, height, colour) {
    r.DrawRectangle(x, y, width, height, colour);
}

function changeColour(x, width, particle_x, particleWidth, particle2_x, particle2Width) {
    return detector.isOverLapping(x, width, particle_x, particleWidth, particle2_x, particle2Width) ? r.RED : r.WHITE;
}

function update() {
    d1.velocity = detector.velocityPosition(d1.x, d1.width, 0, screen.WIDTH / 2, d1.velocity)
    d1.x = detector.move(d1.x, d1.velocity)
    d1.colour = changeColour(d1.x, d1.width, p1.x, p1.width, p2.x, p2.width)

    d2.velocity = detector.velocityPosition(d2.x, d2.width, screen.WIDTH / 2, screen.WIDTH, d2.velocity)
    d2.x = detector.move(d2.x, d2.velocity)
    d2.colour = changeColour(d2.x, d2.width, p1.x, p1.width, p2.x, p2.width)

    d3.velocity = detector.velocityPosition(d3.y, d3.height, 0, screen.HEIGHT, d3.velocity)
    d3.y = detector.move(d3.y, d3.velocity)
    d3.colour = changeColour(d3.y, d3.height, p3.y, p3.height)

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    drawRange(p1.x, 0, p1.width, screen.HEIGHT, r.SKYBLUE);
    drawRange(p2.x, 0, p2.width, screen.HEIGHT, r.SKYBLUE);
    drawRange(0, p3.y, screen.WIDTH, p3.height, r.SKYBLUE);
    drawRange(d1.x, 0, d1.width, d1.height, d1.colour);
    drawRange(d2.x, 0, d2.width, screen.HEIGHT, d2.colour)
    drawRange(0, d3.y, screen.WIDTH, d3.height, d3.colour)
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