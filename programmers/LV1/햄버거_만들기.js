function solution(ingredient) {
    let outerStack = [];
    let result = 0;
    ingredient.forEach((num) => {
        if (outerStack.length === 0) {
            if (num === 1) outerStack.push([1]);
            return;
        }
        const lastInnerStack = outerStack[outerStack.length - 1];
        if (num === 1) {
            if (lastInnerStack.length === 3) {
                outerStack.pop();
                result += 1;
            } else outerStack.push([1]);
        } else if (num === 2) {
            if (lastInnerStack.length === 1) lastInnerStack.push(2);
            else if (lastInnerStack.length === 2) outerStack = [];
            else if (lastInnerStack.length === 3) outerStack = [];
        } else if (num === 3) {
            if (lastInnerStack.length === 1) outerStack = [];
            else if (lastInnerStack.length === 2) lastInnerStack.push(3);
            else if (lastInnerStack.length === 3) outerStack = [];
        }
    });
    return result;
}
