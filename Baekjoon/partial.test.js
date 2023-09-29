const solution = require("./.js");

const inputs = [`7`, "4", "1"];
const outputs = [`1 3 5 7 4 2 6`, "1 3 2 4", "1"];

for (let i = 0; i < inputs.length; i++) {
    test("go", () => {
        const logSpy = jest.spyOn(console, "log");
        const _input = inputs[i].split(`\n`).map((s) => s.trim());
        solution(_input);
        expect(logSpy).toHaveBeenCalledWith(outputs[i]);
    });
}
