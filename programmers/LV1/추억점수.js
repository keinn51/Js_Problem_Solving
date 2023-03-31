function solution(name, yearning, photo) {
    /**
     * 1. name 을 돌면서 yearning을 합친 객체를 만듬
     * 2. photo를 돌면서 객체를 참조해서 결과를 도출
     */
    const _object = {};
    for (let i = 0; i < name.length; i++) {
        _object[name[i]] = Number(yearning[i]);
    }
    return photo.map((_photo) => {
        return _photo.reduce((prev, next) => {
            let _score = Number(_object[next]);
            if (!_score) _score = 0;
            return prev + Number(_score);
        }, 0);
    });
}

console.log(
    solution(
        ["may", "kein", "kain", "radi"],
        [5, 10, 1, 3],
        [
            ["may", "kein", "kain", "radi"],
            ["may", "kein", "brin", "deny"],
            ["kon", "kain", "may", "coni"],
        ]
    )
);
