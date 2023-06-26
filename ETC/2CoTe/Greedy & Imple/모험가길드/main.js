/**
 * 1. 구현 방법
 * 100,000 이기 때문에 절대로 On2이 나와서는 안 됨
 * 2. 그리디 정당성 분석
 * 모험가 중에서 공포도가 가장 적은 애들부터 그룹을 만들게 하면 됨
 * 공포도가 겁나 높은 애? 남는 그룹에서 수가 맞으면 그룹화 해도 되는데, 그냥 마을에 버리고 와도 됨
 *
 * 23122 의 경우
 *  123 22 도 되지만, 1 22 (23) 이렇게 23은 마을에 두고 와도 결국에는 2개의 그룹이 됨
 *  오히려 이 상황에서 2 하나가 더 들어온다고 하면 1 22 223 이렇게 되므로 공포도가 큰 친구를 챙기는 것보다 효율적!
 *  * 정당하다~
 */
function solution(str) {
    const group = str.split(" ");
    let result = 0,
        maxTerr = 1,
        gather = [];
    group.sort((a, b) => a - b);
    for (let i = 0; i < group.length; i++) {
        maxTerr = Number(group[i]);
        gather.push(Number(group[i]));
        if (gather.length === maxTerr) {
            result += 1;
            gather = [];
        }
    }
    return result;
}

console.log(solution("2 3 1 2 2"));
