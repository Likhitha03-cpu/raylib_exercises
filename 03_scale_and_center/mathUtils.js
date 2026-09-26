function rectangleCoordinate(dimension, width) {
    return (dimension - width) / 2;
}

function rectangleScaleDimension(dimension, scalelength) {
    return dimension * scalelength;
}
module.exports = {
    rectangleCoordinate,
    rectangleScaleDimension,
};