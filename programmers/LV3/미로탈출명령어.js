/**
 * d l r u
 * 1. 위 네개 문자를 조합해서 나올 수 있는 크기가 k인 문자열의 배열을 구한다.
 * 2. 수식에서 나온 것만 추가한다
 * 3. 문자열이 완성되었을 때 맵을 넘는지 아닌지 구하기
 * 4. 가능성 있는 것들 중에서 sort해서 맨 앞거를 보내기
 */
function solution(n, m, x, y, r, c, k) {
    const ulc = (k + (x + y) - (r + c)) / 2;

    if (Number.isInteger(ulc) === false) return "impossible";
    if (Math.abs(r - x) + Math.abs(c - y) > k) return "impossible";

    const passArr = [];

    function iter(str, px, py) {
        if (str.length === k) {
            let dc = 0,
                lc = 0,
                rc = 0,
                uc = 0;

            for (let idx in str) {
                const word = str[idx];
                if (word === "d") dc += 1;
                if (word === "l") lc += 1;
                if (word === "r") rc += 1;
                if (word === "u") uc += 1;
            }

            if (uc + lc === ulc && dc + rc + ulc === k && dc - uc === r - x && rc - lc === c - y)
                passArr.push(str);

            return;
        }
        if (px < n) iter(str + "d", px + 1, py);
        if (py > 1) iter(str + "l", px, py - 1);
        if (py < m) iter(str + "r", px, py + 1);
        if (px > 1) iter(str + "u", px - 1, py);
    }

    iter("", x, y);

    passArr.sort((a, b) => {
        for (let i = 0; i < k; i++) {
            if (a[i] < b[i]) return -1;
            else if (a[i] > b[i]) return 1;
        }
        return 0;
    });

    console.log(passArr);

    return passArr[0];
}

console.log(solution(3, 4, 2, 3, 3, 1, 5));
console.log(solution(2, 2, 1, 1, 2, 2, 2));
console.log(solution(3, 3, 1, 2, 3, 3, 4));
