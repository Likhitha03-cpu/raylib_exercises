function isDetectorOutOfBound(x, width, start, end) {
    return x + width >= end || x < start;
}

function updateVelocity(x, width, start, end, velocity) {
    return isDetectorOutOfBound(x, width, start, end) ? -velocity : velocity;
}

function move(x, velocity) {
    return x + velocity;
}

function isOverLapping(
    start,
    width,
    firstParticleField_x,
    firstParticleWidth,
    secondParticleField_x,
    secondParticleWidth,
) {
    const isFirstParticleOverlap =
        start + width >= firstParticleField_x &&
        start <= firstParticleField_x + firstParticleWidth;
    const isSecondParticleOverlap =
        start + width >= secondParticleField_x &&
        start <= secondParticleField_x + secondParticleWidth;

    return isFirstParticleOverlap || isSecondParticleOverlap;
}

module.exports = {
    isDetectorOutOfBound,
    updateVelocity,
    move,
    isOverLapping,
};
