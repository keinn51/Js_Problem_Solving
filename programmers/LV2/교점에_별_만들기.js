/**
 * 문제 풀이 과정
 * 1. 직선에 교차하는 정수 값 구하기
 * 2. 별찍기 해서 2차원 배열로 내보내기
 *
 * 결국 모든 경우를 다 돈 다음에, 정수가 아닌 것들을 추려내야 하기 때문에 완전탐색
 * 방정식 하나 잡고 나머지 4개 중에서 교점이 되는 것들 반환하는 함수가 있어야 함
 * 해당 함수는 매개변수로 두 개의 방정식을 받을 것
 * ! 두 방정식에서 해들을 구해주는 함수가 필요함
 * ! 해당 함수는 정수 값들만 뽑아서 반환해주어야 함
 *
 * 방정식의 해를 구해주는 함수
 * 예를 들어서 2x - y + 4 = 0 / 5x - 8y - 12 = 0
 * 검증 조건은 다음과 같다.
 * 1. A와 B중에 하나라도 겹치는 것이 있어야 함. 한 방정식은 A만 있고 하나는 B만 있으면 불가능.(무수히 많은 해)
 * 2. 편의상 A1, A2, B1, B2라고 한다. (A1 * k) === A2 를 만족하는 k를 구한다. 예시에서는 k === 2.5
 * 3. 첫 번째 방정식에 k를 싹 곱한다. 첫 번째 방정식이 5x - 2.5y + 10 = 0 으로 변한다. (즉, A1*k*x + k*B1*y + k*C1 = 0)
 * 4. 첫 번쩨 방정식에 두 번째 방정식을 뺀다. x는 당연히 사라질 것이다. (k*B1 - B2)y + (k*C1 - C2) = 0이다.
 * 5. 즉 y = -[(k*C1 - C2)/(k*B1 - B2)] => y = -{[(A2/A1)*C1 - C2]/[(A2/A1)*B1 - B2]}
 * 6. A1*x + B1*y + C1 = 0 => A1*x = -(C1 + B1*y) => x = -[(C1 + B1*y)/A1]
 * 이 것으로 x, y를 구한다. 그런데 모든 것들을 반환하면 일처리만 곤란하니 정수일 때에만 배열을 반환하고 아니면 null을 반환해 거르자.
 *
 * 2차 예시 2x - y + 4 = 0 / -y + 1 = 0
 * 1. A2가 0이면 A1도 0이고, B2이 0이면 A2도 0이다.
 * 2. A2가 0이기 때문에 y값이 두 번쨰 방정식에서 나온다.
 * 3. 나온 y값을 A가 있는 방정식에 대입해서 x를 구한다.
 *
 * B1 ===0 -> A2*x + B2*y + C2 = 0 / B2*y = -(A2*x+C2) / y = -((A2*x+C2)/B2)
 */

function getCrossPoint(line1, line2) {
    let [A1, B1, C1] = line1;
    let [A2, B2, C2] = line2;
    // const k = A2 !== 0 ? A2 / A1 : 0;
    // const j = A1 !== 0 ? A1 : 1;
    let x, y;

    if (A1 === 0 || A2 === 0) {
        if (A1 === 0) {
            y = -(C1 / B1);
            x = -((C2 + B2 * y) / A2);
        }
        if (A2 === 0) {
            y = -(C2 / B2);
            x = -((C1 + B1 * y) / A1);
        }
        // console.log("1 x y", line1, line2, [x, y]);
    } else if (B1 === 0 || B2 === 0) {
        if (B1 === 0) {
            x = -(C1 / A1);
            y = -((A2 * x + C2) / B2);
        }
        if (B2 === 0) {
            x = -(C2 / A2);
            y = -((A1 * x + C1) / B1);
        }
        // console.log("2 x y", line1, line2, [x, y]);
    } else {
        y = -(((A2 / A1) * C1 - C2) / ((A2 / A1) * B1 - B2));
        x = -((C1 + B1 * y) / A1);
        if (x === -0) x = 0;
        if (y === -0) y = 0;
        // console.log("3 x y", line1, line2, [x, y]);
    }
    // if (x === Math.round(x) && y === Math.round(y)) console.log("4 x y", line1, line2, [x, y]);
    if (x === Math.round(x) && y === Math.round(y)) return [x, y];
    return null;
}

function getStarArr(crossPoints) {
    let left = 1000,
        right = -1000,
        top = -1000,
        bottom = 1000;
    for (let key in crossPoints) {
        const _crossPoint = crossPoints[key];
        const [_x, _y] = _crossPoint;
        left = Math.min(_x, left);
        right = Math.max(_x, right);
        top = Math.max(_x, top);
        bottom = Math.min(_x, bottom);
    }
    /**
     * left : -4 right:4 top:4 bottom:-4
     * y는 4(top)에서부터 -4(bottom) 까지 내려오기
     * x는 각 y에서 -4(left) 부터 4(right)까지 훑기
     * 두번 포문 돌면서 별만들기
     */
    const result = [];
    for (let y = top; y >= bottom; y--) {
        let line = "";
        for (let x = left; x <= right; x++) {
            line += ".";
        }
        result.push(line);
    }
    // console.log("1)Ress", result);
    for (let key in crossPoints) {
        const _crossPoint = crossPoints[key];
        const [_x, _y] = _crossPoint;
        /**
         * left : -4 top : 4
         * 만약 [0,4] 를 찍고 싶다면, result에서 result[0][4]를 가야함
         * result[top-y][x - left)]
         */
        // console.log("index", [top - _y], [_x - left]);
        result[top - _y] =
            result[top - _y].slice(0, _x - left) +
            "*" +
            result[top - _y].slice(_x - left + 1, result[top - _y].length);
        // result[top - _y][_x - left]. = "*";
    }
    // console.log("2)Ress", result);
    return result;
}

function solution(line) {
    const crossPoints = [];
    for (let i = 0; i < line.length; i++) {
        const _line1 = line[i];
        for (let j = i + 1; j < line.length; j++) {
            const _line2 = line[j];
            const _crossPoint = getCrossPoint(_line1, _line2);
            if (_crossPoint) crossPoints.push(_crossPoint);
        }
    }
    // console.log("Cross points::", crossPoints);
    return getStarArr(crossPoints);
}

console.log(
    solution([
        [2, -1, 4],
        [-2, -1, 4],
        [0, -1, 1],
        [5, -8, -12],
        [5, 8, 12],
    ])
);
