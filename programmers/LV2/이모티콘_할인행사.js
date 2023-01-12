// * start

const iterForDisCountArr = (disCountCases, innerArr, startIdx, depLen, depth) => {
    const possibleDisCount = [10, 20, 30, 40];
    if (depth === depLen) {
        disCountCases.push([...innerArr]);
        return;
    }
    for (let i = startIdx; i < 4; i++) {
        innerArr[depth] = possibleDisCount[i];
        iterForDisCountArr(disCountCases, innerArr, startIdx, depLen, depth + 1);
    }
};

const percentageToPoint = (disCountCases) => {
    const pointObj = { 10: 0.9, 20: 0.8, 30: 0.7, 40: 0.6 };
    return disCountCases.map((discountPercent) =>
        discountPercent.map((percent) => pointObj[percent])
    );
};

const makeDiscountedPrice = (pointArr, emoticon) => {
    const newArr = [];
    pointArr.forEach((discountPoint) => {
        const innerArr = [];
        for (let i = 0; i < discountPoint.length; i++) {
            innerArr.push(Number(discountPoint[i]) * Number(emoticon[i]));
        }
        newArr.push(innerArr);
    });
    return newArr;
};

const solution = (users, emoticons) => {
    // console.log(emoticons);
    let minDisCount = 40;
    const emoticonLen = emoticons.length;
    users.forEach((userArr) => {
        const newDisCount = Math.ceil(Number(userArr[0]) / 10) * 10;
        if (newDisCount < minDisCount) minDisCount = newDisCount;
    });
    // console.log("minDisCount", minDisCount, "emoticonLen", emoticonLen);

    const startIdx = [10, 20, 30, 40].indexOf(minDisCount);
    let disCountCases = [];
    const iterInerArr = [];

    // console.log(startIdx, emoticonLen);
    iterForDisCountArr(disCountCases, iterInerArr, startIdx, emoticonLen, 0);
    // console.log("disCountCases", disCountCases);

    const pointArr = percentageToPoint(disCountCases);
    // console.log("pointArr", pointArr);

    const discountedPriceArr = makeDiscountedPrice(pointArr, emoticons);
    // console.log(discountedPriceArr);

    const isPurchaseArr = [];
    // console.log(disCountCases);

    users.forEach((user) => {
        isPurchaseArr.push(
            disCountCases.map((arr) =>
                arr.map((discountPercent) => (Number(discountPercent) >= Number(user[0]) ? 1 : 0))
            )
        );
    });
    // console.log("isPurchaseArr", isPurchaseArr);
    const userPayArr = [];
    isPurchaseArr.forEach((userArr) => {
        // console.log("userArr", userArr);
        const innerArr = [];
        userArr.forEach((purchaseArr, topIdx) => {
            // console.log("purchaseArr", purchaseArr);
            let paidPrice = 0;
            for (let i = 0; i < purchaseArr.length; i++) {
                paidPrice += Number(discountedPriceArr[topIdx][i]) * Number(purchaseArr[i]);
            }
            innerArr.push(paidPrice);
        });
        userPayArr.push(innerArr);
    });
    // console.log("userPayArr", userPayArr.length);

    const bondedUserPayArr = [];
    for (let i = 0; i < userPayArr[0].length; i++) {
        const innerArr = [0, 0];
        for (let j = 0; j < userPayArr.length; j++) {
            const money = userPayArr[j][i];
            if (Number(money) >= Number(users[j][1])) {
                innerArr[0] += 1;
            } else {
                innerArr[1] += Number(money);
            }
        }
        bondedUserPayArr.push(innerArr);
    }
    bondedUserPayArr.sort((a, b) => {
        if (Number(a[0]) > Number(b[0])) return -1;
        else if (Number(a[0]) === Number(b[0])) {
            if (Number(a[1]) >= Number(b[1])) return -1;
            else return 1;
        } else return 1;
    });
    // console.log("bondedUserPayArr", bondedUserPayArr);
    return bondedUserPayArr[0];
};

console.log(
    solution(
        [
            [40, 10000],
            [25, 10000],
        ],
        [7000, 9000]
    )
);
console.log(
    solution(
        [
            [40, 2900],
            [23, 10000],
            [11, 5200],
            [5, 5900],
            [40, 3100],
            [27, 9200],
            [32, 6900],
        ],
        [1300, 1500, 1600, 4900]
    )
);
