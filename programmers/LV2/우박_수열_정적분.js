function solution(k, ranges) {
    let idx = 0;
    const area = [];
    while (k !== 1) {
        const befNum = k;
        if (k % 2 === 0) k /= 2;
        else k = 3 * k + 1;
        area.push((befNum + k) / 2);
        idx += 1;
    }

    return ranges.map((range) => {
        const [startDiiff, endDiff] = range;
        const startIdx = startDiiff;
        const endIdx = idx + endDiff;
        let _result = 0;
        if (startIdx === endIdx) return 0;
        if (startIdx > endIdx) return -1;
        for (let i = startIdx; i < endIdx; i++) {
            _result += area[i];
        }
        return _result;
    });
}
