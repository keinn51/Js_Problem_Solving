const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";

function solution(input) {
    let y = 0;
    while (y < input.length) {
        const [N, M] = input[y].split(" ").map((e) => +e);
        const counter = {};
        if (N === 0 && M === 0) break;

        for (let idx = y + 1; idx <= y + N; idx++) {
            const nums = input[idx].split(" ").map((e) => +e);
            nums.forEach((num) => {
                if (counter[num] === undefined) counter[num] = 1;
                else counter[num] += 1;
            });
        }
        // {32 : 3, 33 : 3, 99:4}
        const sorted = Object.entries(counter).sort((a, b) => Number(b[1]) - Number(a[1]));
        let maxCount = Number(sorted[0][1]); // 4
        const result = [];

        for (let i = 0; i < sorted.length; i++) {
            const [_num, _count] = sorted[i];
            if (_count === maxCount) continue;
            while (sorted[i] && Number(sorted[i][1]) === Number(_count))
                result.push(sorted[i++][0]);
            break;
        }

        result.sort((a, b) => Number(a) - Number(b));

        console.log(result.join(" "));

        y += N + 1;
    }
}

solution(require("fs").readFileSync(filename).toString().trim().split("\n"));
