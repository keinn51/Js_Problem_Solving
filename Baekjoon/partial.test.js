const solution = require("./9935_문자열폭발.js");

test("first", () => {
    const logSpy = jest.spyOn(console, "log");

    const _inputWord = `mirkovC4nizCC44
    C4`;

    const _expectedResult = `mirkovniz`;

    const _input = _inputWord.split(`\n`).map((s) => s.trim());

    solution(_input);

    expect(logSpy).toHaveBeenCalledWith(_expectedResult);
});

test("second", () => {
    const logSpy = jest.spyOn(console, "log");

    const _inputWord = `12ab112ab2ab
    12ab`;

    const _expectedResult = `FRULA`;

    const _input = _inputWord.split(`\n`).map((s) => s.trim());

    solution(_input);

    expect(logSpy).toHaveBeenCalledWith(_expectedResult);
});

test("second", () => {
    const logSpy = jest.spyOn(console, "log");

    const _inputWord = `mirkovC4nizCCC4
    C4`;

    const _expectedResult = `mirkovnizCC`;

    const _input = _inputWord.split(`\n`).map((s) => s.trim());

    solution(_input);

    expect(logSpy).toHaveBeenCalledWith(_expectedResult);
});
