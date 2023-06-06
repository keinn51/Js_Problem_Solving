function solution(m, n, startX, startY, balls) {
    const calculate = (direction, [x1, y1], [x2, y2]) => {
        const minX = Math.min(x1, x2);
        const minY = Math.min(y1, y2);
        const maxX = Math.max(x1, x2);
        const maxY = Math.max(y1, y2);
        const BIGGEST_NUM = Number.MAX_SAFE_INTEGER;

        let result;

        switch (direction) {
            case "u":
                if (x1 === x2 && y1 <= y2) return BIGGEST_NUM;
                result = Math.pow(maxX - minX, 2) + Math.pow(n - maxY + n - minY, 2);
                break;
            case "d":
                if (x1 === x2 && y1 >= y2) return BIGGEST_NUM;
                result = Math.pow(maxX - minX, 2) + Math.pow(minY + maxY, 2);
                break;
            case "l":
                if (y1 === y2 && x1 >= x2) return BIGGEST_NUM;
                result = Math.pow(maxY - minY, 2) + Math.pow(minX + maxX, 2);
                break;
            case "r":
                if (y1 === y2 && x1 <= x2) return BIGGEST_NUM;
                result = Math.pow(maxY - minY, 2) + Math.pow(m - minX + m - maxX, 2);
                break;
        }

        return result;
    };

    const start = [startX, startY];

    return balls.map((ball) =>
        Math.min(
            calculate("u", start, ball),
            calculate("d", start, ball),
            calculate("r", start, ball),
            calculate("l", start, ball)
        )
    );
}

console.log(
    solution(
        10,
        10,
        3,
        7,
        [
            [7, 7],
            [2, 7],
            [7, 3],
        ],
        [52, 37, 116]
    )
);
