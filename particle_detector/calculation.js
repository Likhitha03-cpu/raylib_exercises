function isdetectorOutOfBound(x, width, WIDTH) {
    return x + width > WIDTH || x < 0;
}
function detectorVelocityPosition(x, width, WIDTH, velocity) {
    return isdetectorOutOfBound(x, width, WIDTH) ? - velocity : velocity
}

function movingDetector(x, velocity) {
    return x + velocity;
}
module.exports = {
    isdetectorOutOfBound,
    detectorVelocityPosition,
    movingDetector,
};
