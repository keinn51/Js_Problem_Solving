/**
 * 문제를 해결하려면?
 * 1. 10진수를 2진수로 바꾸는데, 2진수 문자열 길이가 홀수여야 한다. 홀수가 아니라면 0을 맨 앞에다가 붙여준다.
 * 2. 나온 이진수대로 이진트리를 그려봅니다.
 * 3. 이진트리가 유효하지 않다면 0을 반환하는 것인데, 유효한 이진트리는 상위노드와 하위노드가 잘 연결만 되어있으면 된다.
 *      즉, 상-하위 노드 중에서 연결되어 있지 않은 이진트리를 찾는 것
 * 4.
 *
 * 문제에서 주는 것들
 * [7, 42, 5]
 *      7(십진수) : 111(이진수) => 이진트리로 표현 가능
 *      42(십진수) : 101010
 *
 * 예시 111
 * 111을 2진수로 표현하면 1101111
 * 홀수개이기 때문에 이미 유효함
 * 110 1 111 / 1 1 0   0   1 1 1
 *
 * 예시 95
 * 95를 2진수로 표현하면 1011111
 * 101 1 111 에서 상위 노드가 0이기 때문에 말이 안 됨
 *
 * 예시 232
 * 232 === 11101000 === 011101000 === 0111 0 1000 === 0 1 1  1    0    1 0 0  0
 *
 * 예시 5
 * 5 === 101 === 1  0  1
 *
 * 예시 1231
 * 1231 === 10011001111 === 10011 0 01111
 *
 * 예시
 * 0110000110001101010001101 === 011000011000 1 101010001101
 * 001100 0 011000 // 010101 0 001101
 *
 * 예시를 통한 추론
 * 1. 문자열을 받으면 홀수개수로 맞춘 후 left center right를 나눈다
 * 2. 만약 left와 right개수가 안 맞는다면 left부터 채운다.
 * 3. center가 1이 아니라면 0을 반환
 * 4. left와 right가 없을 때까지 내려본다
 */

function checkBTree(b_str, start, end) {
    //부모 노드 idx
    const mid = Math.floor((start + end) / 2);
    //자식 노드 idx
    const left_c = Math.floor((start + mid - 1) / 2);
    const right_c = Math.floor((mid + 1 + end) / 2);

    //리프노드 도달
    if (start == end) return true;

    //부모가 0 인데 자식에 1이 있으면 안됨 -> 이 경우 false 를 반환
    if (b_str[mid] === "0" && (b_str[left_c] === "1" || b_str[right_c] === "1")) {
        return false;
    }

    if (!checkBTree(b_str, start, mid - 1)) return false;
    if (!checkBTree(b_str, mid + 1, end)) return false;
    return true;
}

function solution(numbers) {
    const answer = [];
    for (let number of numbers) {
        let binarystr = number.toString(2);
        let nowTreeCount = binarystr.length;
        /**
         * 현재 트리 총 개수 nowTreeCount <== 2 ** height -1
         * 포화 트리 총 개수 perfectTreeCount === 2 ** height -1
         */
        let height = Math.ceil(Math.log2(nowTreeCount + 1));
        const perfectTreeCount = 2 ** height - 1;
        let treeStr = "0".repeat(perfectTreeCount - nowTreeCount);
        treeStr = treeStr + "" + binarystr;
        if (checkBTree(treeStr, 0, treeStr.length - 1)) answer.push(1);
        else answer.push(0);
    }
    return answer;
}
