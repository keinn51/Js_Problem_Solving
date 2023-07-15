/**
 * 각 열은 비워지면 사라진다
 * 각 라운드마다 할 수 있는 최대한을 선택하는게 최대의 결과를 보장하지 않음
 * 따라서 그리디는 아니다. 완전 탐색인 것 같은데?
 * 무조건 꽉 채운 상태로 시작하게 해준다
 *
 * 각 열을 계속 비워주어야 하나? -> 응
 * 1 1 0 2 2
 * 1 1 0 1 2
 * 1 1 1 2 2 ->49
 *
 * map을 만드는 것이 목표.......
 *
 * (1,2,3) (1,2,3) 맞는 것 같은데? 그냥 하나하나 1부터 3까지 넣어서...
 * 그런데 만든 것이 가장 큰 점수라는 것은 어떻게 알 수 있지? -> 결국 만들고 해보는 것까지 해야함...
 * -> 그런데 스페셜 저지인게 결국, 최대한 4 4 7 들이 다 뭉쳐있으면 되는 것. 가장 큰 수는 4제곱 4제곱 7제곱을 더한 수 일 수 밖에 없음
 * 왜냐면 1제곱 + 2제곱 === 5 임, 해봤자 3제곱을 못 이김. 결국 각 라운드에서 최대한 같은 색상 구슬들이 뭉쳐이도록 맵을 구성해야 함.
 * 그게 안 되면, 특정 색상 그룹을 삭제시킨 후 맵이 재정비되고 나서의 맵이 그래야 함.
 *
 * 최대한 뭉칠 수 있으면 뭉치되, 못 뭉쳐버리는 경우도 발생할 수 있다. 그 때 맵을 어떻게 구성할지 생각해야함.
 * 5 5 14
 * 1 2 1 2 2 2 1 2 10
 * 무조건 뭉칠 수 있는데??? 굳이 저렇게 만들 필요가 없는 것이었다.
 * - 우하좌를 보고 넣을 수 있으면 넣기 (무조건 이 순서대로)
 * - 하다가 해당 숫자가 더 이상 갈 곳이 없는데, 목표 개수를 달성하지 못했으며 해당 재귀 return
 * - 마지막 컬러의 개수까지 다 채웠으면 해당 map 반환
 *
 * 1 1 1 1 2
 * 3 3 2 2 2
 * 3 3 3 3 3
 */

function solution(input) {
    const [h, w, c] = input[0].split(" ").map((e) => +e);
    const colors = input[1].split(" ").map((e) => +e);
    const map = new Array(h).fill(0).map((_) => new Array(w).fill(0));
    console.log(`map`, map);
    let counter = 0;

    function iter(nowColorIdx, x, y) {
        map[y][x] = nowColorIdx + 1;
        counter += 1;
        if (x + 1 < w && map[y][x + 1] === 0) {
            if (counter < colors[nowColorIdx]) iter(nowColorIdx, x + 1, y);
            else {
                counter = 0;
                iter(nowColorIdx + 1, x + 1, y);
            }
        } else if (y + 1 < h && map[y + 1][x] === 0) {
            if (counter < colors[nowColorIdx]) iter(nowColorIdx, x, y + 1);
            else {
                counter = 0;
                iter(nowColorIdx + 1, x, y + 1);
            }
        } else if (x > 0 && map[y][x - 1] === 0) {
            if (counter < colors[nowColorIdx]) iter(nowColorIdx, x - 1, y);
            else {
                counter = 0;
                iter(nowColorIdx + 1, x - 1, y);
            }
        }
    }
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
