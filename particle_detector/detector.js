function isdetectorOutOfBound(x, width, WIDTH) {
    return x + width > WIDTH || x < 0;
}
function velocityPosition(x, width, WIDTH, velocity) {
    return isdetectorOutOfBound(x, width, WIDTH) ? - velocity : velocity

}

function movingDetector(x, velocity) {
    return x + velocity;
}
function isOverLapping(x, width, particle_x, particleWidth, particle2_x, particle2Width) {
    const isFirstParticleOverlap = x + width >= particle_x && x <= particle_x + particleWidth;
    const isSecondParticleOverlap = x + width >= particle2_x && x <= particle2_x + particle2Width;
    return isFirstParticleOverlap || isSecondParticleOverlap;
}
module.exports = {
    isdetectorOutOfBound,
    velocityPosition,
    movingDetector,
    isOverLapping,
};
