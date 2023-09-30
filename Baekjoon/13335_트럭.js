/**
 * 7 4 5 6
 *
 * 7이랑 6은 건너는데 2초가 걸림
 * 4랑5는 한 번에 올라갈 수 있어서 3초만 걸림
 *
 * 다 떠나서 위에 있는 시간을 재어야 하는데
 * 7이랑 6은 2초 있음
 *
 * 4랑 5도 2초기는 하지만, 같이 올라갈 수 있음
 * 다리의 길이가 5라고 하고 하중이 10이라고 하면
 * 바로 뒤에서 같이 올라오는거니까 6초 걸리겠지 합쳐서
 *
 * 즉 맨 앞에 있는 차와 같이 갈 수 있으면 그냥 하나씩만 더하면 되고
 * 못 올라가면 앞에 있는 차가 다 지나가기까지 기달렸다가 가면 됨
 */
function solution(input) {
    const [n, w, L] = input[0].split(" ").map(Number);
    const cars = input[1].split(" ").map(Number);

    // console.log(n, w, L, cars);

    let count = 1;
    let index = 0;
    while (index < n) {
        const car_W = cars[index];
        let stack = 0;
        let p = -1;
        // 마지막 차라면 조용히 보내준다
        if (index === n - 1) {
            count += w;
            break;
        }
        // stack에 다음 차를 추가한 무게가 L보다 작다면 그 차도 함께 추가한다
        while (index < n && stack + cars[index] <= L) {
            stack += cars[index];
            p += 1;

            console.log(car_W, stack, p, index);

            // while을 한번 더 돌 수 있는지 확인
            if (index + 1 < n && stack + cars[index + 1] <= L) index += 1;
            else break;
        }

        count += w + p;
        index += 1;
        console.log("stack & p & count:", car_W, stack, p, count);
    }
    console.log(count);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);

module.exports = solution;
