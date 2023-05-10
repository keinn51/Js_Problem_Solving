function solution(cards) {
    const boxOpen = new Array(cards.length).fill(false);
    const res = [];
    cards.forEach((card, boxIdx) => {
        let cardNum = card;
        let cardIdx = cardNum - 1;
        const boxNum = boxIdx + 1;
        const innerStack = [];
        if (boxOpen[boxIdx] === true) return;
        else {
            innerStack.push(boxNum);
            boxOpen[boxIdx] = true;
        }
        while (boxOpen[cardIdx] === false) {
            innerStack.push(cardNum);
            boxOpen[cardIdx] = true;
            cardNum = cards[cardIdx];
            cardIdx = cardNum - 1;
        }
        res.push(innerStack.length);
    });
    if (res.length <= 1) return 0;
    const [top, second] = res.sort((a, b) => b - a);
    return top * second;
}
