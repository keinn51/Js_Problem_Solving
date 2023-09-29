const solution = require("./.js");

const inputs = [
    "2 162",
    "4 42",
    "100 40021",
    "100 100",
    "100 101",
    "100 1001",
    "1000 2000",
    "255 5101",
];
const outputs = [5, -1, 5, 1, -1, 2, 2, 3];

for (let i = 0; i < inputs.length; i++) {
    test("go", () => {
        const logSpy = jest.spyOn(console, "log");
        const _input = inputs[i].split(`\n`).map((s) => s.trim());
        solution(_input);
        expect(logSpy).toHaveBeenCalledWith(outputs[i]);
    });
}
