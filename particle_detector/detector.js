function isdetectorOutOfBound(x, width, WIDTH) {
    return x + width > WIDTH || x < 0;
}
function detectorVelocityPosition(x, width, WIDTH, velocity) {
    return isdetectorOutOfBound(x, width, WIDTH) ? - velocity : velocity
}

function movingDetector(x, velocity) {
    return x + velocity;
}
function isOverLapping(x, width, particle_x, particleWidth) {
    return x + width >= particle_x && x <= particle_x + particleWidth
}
module.exports = {
    isdetectorOutOfBound,
    detectorVelocityPosition,
    movingDetector,
    isOverLapping,
};
