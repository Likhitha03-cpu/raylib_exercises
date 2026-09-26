const r = require("raylib")
function square(x) {
    return x * x;
}

function sqrt(d) {
    return d ** 0.5;
}
function distanceBetweenCircles(x1, y1, x2, y2) {
    return sqrt(square(x2 - x1) + square(y2 - y1));
}

function chooseColour(x1, y1, x2, y2, radius1, radius2) {
    const distance = distanceBetweenCircles(x1, y1, x2, y2);
    const totalRadius = radius1 + radius2;
    const colour = distance < totalRadius ? r.RED : r.BLACK;
    return colour;
}
module.exports = {
    square,
    sqrt,
    distanceBetweenCircles,
    chooseColour,
};