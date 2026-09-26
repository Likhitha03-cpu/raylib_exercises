const sketch = require("./sketch");

function loop() {
    while (sketch.running()) {
        sketch.draw();
    }
}
function main() {
    sketch.setup();
    loop();
    sketch.teardown();
}
main();