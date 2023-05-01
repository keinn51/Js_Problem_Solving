function solution(players, callings) {
    const orderObj = {},
        countObj = {},
        playerLen = players.length,
        res = [];
    players.forEach((player, idx) => {
        orderObj[idx] = player;
        countObj[player] = idx;
    });
    callings.forEach((calling, idx) => {
        const nowOrder = countObj[calling];
        const nowMan = orderObj[nowOrder];
        const beforeMan = orderObj[nowOrder - 1];

        orderObj[nowOrder - 1] = nowMan;
        orderObj[nowOrder] = beforeMan;
        countObj[nowMan] -= 1;
        countObj[beforeMan] += 1;
    });
    for (let idx in orderObj) {
        res.push(orderObj[idx]);
    }
    return res;
}
