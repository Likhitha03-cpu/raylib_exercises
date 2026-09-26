function findcloser(x, y, x1, y1, x2, y2) {
    const d1 = (x1 - x) ** 2 + (y1 - y) ** 2;
    const d2 = (x2 - x) ** 2 + (y2 - y) ** 2;

    if (d1 < d2) return 0;
    else if (d1 > d2) return 1;
    return 3;
}
module.exports = {
    findcloser,
};