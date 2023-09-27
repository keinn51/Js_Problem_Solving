const solution = require("./DataStructure/Stack/9935_문자열폭발.js");

const inputs = [
    `mirkovC4nizCC44
C4`,
    `12ab112ab2ab
12ab`,
    `mirkovC4nizCC4444CCCC4
C4`,
    `abcdcdcdcdcdcabcdcdedcbdcdc
cd`,
    `1111111111111111111111111111111111
1`,
];
const outputs = [`mirkovniz`, "FRULA", "mirkovniz44CCC", "abcabedcbdc", "FRULA"];

for (let i = 0; i < inputs.length; i++) {
    test("go", () => {
        const logSpy = jest.spyOn(console, "log");
        const _input = inputs[i].split(`\n`).map((s) => s.trim());
        solution(_input);
        expect(logSpy).toHaveBeenCalledWith(outputs[i]);
    });
}
