/**
 * d l r u
 *
 * 1. 일단 최단 경로를 가져와야 함. 왜? 그 최단 경로는 무조건 포함되는 값이기 때문에.
 *      이건 쉬움 start가 (2,3) end가 (3,1) 이니까 x는 +1 y는 -2 가 무조건.
 *      문자열로 해석하면 dll. 이 때에도 작은 문자가 먼저 나와야 함.
 * 2. 문제에서는 dll이 나올 것이다. 이제 여기서 나올 수 있는 것들은 짝지어서 나온다.
 *      d가 나오면 u가 나오고, l이 나오면 r이 나온다.
 *      u보다는 d가, r보다는 l이 우선으로 나오는 것이 좋다.
 *          그런데 d가 나올 수 없는 경우(이미 x축의 끝이라면) l이 먼저 나온다
 *          l도 나올 수 없는 경우?(y축의 왼쪽 끝이어서?) r이 나오겠지
 *          r도 아니면.. 일리 없기 때문에 (m의 크기가 2보다는 커서) r이 되겠지
 *      이 것을 반복하면 된다. 언제까지? 문자열의 len가 k일 때까지!
 * 3.impossible
 *      최소 경로를 뺀 길이가 짝수가 아니라면
 *      최소 경로의 길이보다 k가 작다면
 */
function solution(n, m, x, y, r, c, k) {
    let result = "";
    let tempx = r - x,
        tempy = c - y;
    let templen = Math.abs(tempx) + Math.abs(tempy); //3 k:5

    if ((k - templen) % 2 !== 0) return "impossible";
    if (k < templen) return "impossible";

    // 최단 경로 구하기
    for (let i = 0; i < templen; i++) {
        if (tempx > 0) {
            result += "d";
        } else if (tempy < 0) {
            result += "l";
        } else if (tempy > 0) {
            result += "r";
        } else if (tempx < 0) {
            result += "u";
        }
    }

    let goup = false,
        godown = false,
        goleft = false,
        goright = false;

    for (let i = templen; i < k; i++) {
        if (goup || godown || goleft || goright) {
            if (goup) {
                x -= 1;
                result += "u";
                goup = false;
            } else if (godown) {
                x += 1;
                result += "d";
                godown = false;
            } else if (goleft) {
                y -= 1;
                result += "l";
                goleft = false;
            } else if (goright) {
                y += 1;
                result += "r";
                goright = false;
            }
        } else {
            if (x < n || y > 1) {
                if (x < n) {
                    x += 1;
                    result += "d";
                    goup = true;
                } else if (y > 1) {
                    y -= 1;
                    result += "l";
                    goright = true;
                }
            } else {
                if (y < m) {
                    y += 1;
                    result += "r";
                    goleft = true;
                } else if (x > 1) {
                    x -= 1;
                    result += "u";
                    godown = true;
                }
            }
        }
    }
}
