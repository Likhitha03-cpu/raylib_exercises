function isdetectorOutOfBound(x, width, start, end) {
    return x + width >= end || x < start;
}
function velocityPosition(x, width, start, end, velocity) {
    return isdetectorOutOfBound(x, width, start, end) ? - velocity : velocity

}

function move(x, velocity) {
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
    move,
    isOverLapping,
};
