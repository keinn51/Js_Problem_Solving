// !실패!

function solution(users, emoticons) {
    const discount = { 10: 0.9, 20: 0.8, 30: 0.7, 40: 0.6 };
    const discountArr = [10, 20, 30, 40];
    const userLen = users.length;
    const emoticonsLen = emoticons.length;
    // console.log(discount[10]);
    const minDiscount = Math.ceil(users.map((el) => el[0]).sort((a, b) => a - b)[0] / 10) * 10;
    console.log("minDiscount", minDiscount, "userLen", userLen, "emoticonsLen", emoticonsLen);
    const minIdx = minDiscount / 10 - 1;
    const possibleDis = discountArr.slice(minIdx, discountArr.length);
    const disArr = [];
    for (let i = 0; i < possibleDis.length; i++) {
        for (let j = 0; j < possibleDis.length; j++) {
            disArr.push([possibleDis[i], possibleDis[j]]);
        }
    }
    // console.log(disArr);
    const allPriceArr = [];
    disArr.forEach((el) => {
        const priceArr = [];
        emoticons.forEach((price, idx) => {
            priceArr.push(price * discount[el[idx]]);
        });
        allPriceArr.push(priceArr);
    });
    console.log("##", disArr, allPriceArr);
    const result = [0, 0];
    allPriceArr.forEach((price, idx) => {
        users.forEach((user) => {
            const purchaseIdxArr = [];
            let money = 0;
            console.log("price", price);
            console.log("disArr", disArr);
            console.log("user", user);

            const disLimit = user[0];
            const emotiLimit = user[1];
            disArr.forEach((dis, idx2) => {
                if (dis >= disLimit) purchaseIdxArr.push(idx2);
            });
            console.log("purchaseIdxArr", purchaseIdxArr);
            purchaseIdxArr.forEach((purchaseIdx) => {
                money += price[purchaseIdx] * discount[disArr[purchaseIdx]];
            });
            console.log("money", money);

            console.log(purchaseIdxArr);
        });
    });
}

solution(
    [
        [40, 10000],
        [25, 10000],
    ],
    [7000, 9000]
);

// const a = [30, 40];
// const b = 2;
// let currIdx = 0;

// function some(a, b) {
//     const discount = { 10: 0.9, 20: 0.8, 30: 0.7, 40: 0.6 };
//     const newArr = [];
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a.length; j++) {
//             newArr.push([a[i], a[j]]);
//         }
//     }
//     console.log("newArr", newArr);

//     // [20,20,20,20], [20,20,20,30]
// }

// some(a, b);
