/**
 * a b c d
 * 5개에 들어갈 수 있는 것
 * _a_b_c_d_
 *
 * cursor 0 1 2 3 4
 * alpha   0 1 2 3
 *
 * c : 4
 * p x
 * c-1 index 문자열 뒤에 붙이기
 * c 도 하나 더해지기
 *
 * L -> c : 3
 * c - 1
 *
 * B
 * c-1문자를 삭제하기
 * L도 하나 줄이기
 *
 * slice쓰면 안 되고 left string right string으로 해야함
 *
 * abcd ''
 *
 * abcdx
 * abcd x
 * abcdy x
 *
 * slice를 없애라!
 *
 */
function solution(input) {
    const [str, N, ...arr] = input;
    let left = str.trim();
    let right = "";

    for (let i = 0; i < Number(N); i++) {
        const [_command, _variable] = arr[i].trim().split(" ");

        switch (_command) {
            case "L":
                if (left.length > 0) {
                    right = left[left.length - 1] + right;
                    left = left.slice(0, -1);
                }
                break;
            case "D":
                if (right.length > 0) {
                    left = left + right[0];
                    right = right.slice(1, -1);
                }
                break;
            case "B":
                if (left.length > 0) {
                    left = left.slice(0, -1);
                }
                break;
            case "P":
                left = left + _variable;
                break;
        }
    }

    if (left.trim() + right.trim() !== "") console.log(left.trim() + right.trim());
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
