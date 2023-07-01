/**
 * - 첫 번째 입력으로 지도를 만든다
 *  지도를 만들 필요도 없을 것 같음. xy해가지고 범위 체크만 해주면 됨
 * - 두 번째 입력들을 분기처리 한다.
 *
 */

const solution = (input) => {
    const [len, directions] = input.split("\n");
    let [x, y] = [1, 1];
    console.log(directions);
    directions.split(" ").forEach((_dir) => {
        switch (_dir) {
            case "L":
                if (x > 1) x -= 1;
                break;
            case "R":
                if (x < Number(len)) x += 1;
                break;
            case "U":
                if (y > 1) y -= 1;
                break;
            case "D":
                if (y < Number(len)) y += 1;
                break;
        }
    });
    console.log(y, x);
};

solution(`5
R R R U D D`);
