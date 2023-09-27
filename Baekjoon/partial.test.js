const solution = require("./s.js");

test("first", () => {
    const logSpy = jest.spyOn(console, "log");

    const _inputWord = ``;

    const _expectedResult = ``;

    const _input = _inputWord.split(`\n`).map((s) => s.trim());

    solution(_input);

    expect(logSpy).toHaveBeenCalledWith(_expectedResult);
});

test("second", () => {
    const logSpy = jest.spyOn(console, "log");

    const _inputWord = ``;

    const _expectedResult = ``;

    const _input = _inputWord.split(`\n`).map((s) => s.trim());

    solution(_input);

    expect(logSpy).toHaveBeenCalledWith(_expectedResult);
});
