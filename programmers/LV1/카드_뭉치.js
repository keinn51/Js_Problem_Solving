function solution(cards1, cards2, goal) {
    let card1Idx = 0,
        card2Idx = 0;
    for (let i = 0; i < goal.length; i++) {
        const word = goal[i];
        if (word === cards1[card1Idx]) {
            card1Idx += 1;
            continue;
        }
        if (word === cards2[card2Idx]) {
            card2Idx += 1;
            continue;
        }
        return "No";
    }
    return "Yes";
}
