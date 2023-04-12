// 시간초과 풀이
let min = 1000 * 1000;

function getMinSize(sizes) {
    // 최소 최대 찾기 로직
    let maxWidSize = 1,
        maxHeiSize = 1;

    sizes.forEach((size) => {
        maxWidSize = Math.max(size[0], maxWidSize);
        maxHeiSize = Math.max(size[1], maxHeiSize);
    });
    min = Math.min(min, maxWidSize * maxHeiSize);
}

function iter(sizes, start, end, depth, depthEnd) {
    for (let i = start; i < end; i++) {
        let temp;
        temp = sizes[start][0];
        sizes[start][0] = sizes[start][1];
        sizes[start][1] = temp;

        getMinSize(sizes);

        if (depth < depthEnd) iter(sizes, start + 1, end, depth + 1, depthEnd);
    }
}

function solution(sizes) {
    var answer = 0;

    let maxWidSize = 1,
        maxHeiSize = 1;

    getMinSize(sizes);

    for (let i = 0; i < sizes.length; i++) {
        iter(sizes, 0, sizes.length, 0, i);
    }

    return min;
}

// 이렇게 하면 되잖아...

function solution(sizes) {
    var answer = 0;

    const smallArr = [];
    const bigArr = [];

    sizes.forEach((size) => {
        smallArr.push(Math.min(size[0], size[1]));
        bigArr.push(Math.max(size[0], size[1]));
    });

    smallArr.sort((a, b) => b - a);
    bigArr.sort((a, b) => b - a);

    return smallArr[0] * bigArr[0];
}
