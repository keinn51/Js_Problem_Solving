const getCrossPoint = (line) => {
    let points = []; // 정수로 이루어진 교점을 담을 배열

    for (let i = 0, len = line.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const [a1, b1, c1] = line[i];
            const [a2, b2, c2] = line[j];

            // 직선의 기울기를 구해 비교한다. 기울기가 같다면 교점이 생기지 않는다.
            const slope = a1 * b2 - b1 * a2;

            if (slope) {
                const pointX = (b1 * c2 - c1 * b2) / slope;
                const pointY = (c1 * a2 - a1 * c2) / slope;
                // x, y 좌표가 모두 정수인 교점만을 pints배열에 넣어준다.
                if (Number.isInteger(pointX) && Number.isInteger(pointY)) {
                    points.push([pointX, pointY]);
                }
            }
        }
    }
    return points;
};

function getStarArr(crossPoints) {
    let left = Number.MAX_SAFE_INTEGER,
        right = Number.MIN_SAFE_INTEGER,
        top = Number.MIN_SAFE_INTEGER,
        bottom = Number.MAX_SAFE_INTEGER;
    for (let key in crossPoints) {
        const _crossPoint = crossPoints[key];
        const [_x, _y] = _crossPoint;
        right = Math.max(_x, right);
        top = Math.max(_y, top);
        left = Math.min(_x, left);
        bottom = Math.min(_y, bottom);
    }
    const result = [];
    for (let y = top; y >= bottom; y--) {
        let line = [];
        for (let x = left; x <= right; x++) {
            line.push(".");
        }
        result.push(line);
    }
    for (let key in crossPoints) {
        const _crossPoint = crossPoints[key];
        const [_x, _y] = _crossPoint;
        result[top - _y][_x - left] = "*";
    }
    return result.map((arr) => arr.join(""));
}

function solution(line) {
    const crossPoints = getCrossPoint(line);
    return getStarArr(crossPoints);
}
