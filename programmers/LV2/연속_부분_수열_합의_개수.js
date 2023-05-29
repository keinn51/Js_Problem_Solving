/**
 * 음... 일단 정렬을 해본다 [1,1,4,7,9]
 * 차라리 일단 다 넣고 검증 과정을 나중에 하는 것도 괜찮은 것 같다...
 */
function solution(elements) {
    let res = [];
    for (let i = 0; i < elements.length; i++) {
        let _sum = 0;
        for (let j = 0; j < elements.length; j++) {
            let _roullete = i + j >= elements.length ? i + j - elements.length : i + j;
            _sum += elements[_roullete];
            res.push(_sum);
        }
    }
    res = new Set(res);
    return res.size;
}

console.log(solution([7, 9, 1, 1, 4]));
