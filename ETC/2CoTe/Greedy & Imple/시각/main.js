/**
 * 0:00:00
 * N:59:59
 * count number 3 in exist
 * u got 2 second
 * update second -> if second 60, second 0 and 1 min
 * -> if 60 min, min 0 and 1 hour
 */
const solution = (N) => {
    let [h, m, s] = [0, 0, 0];
    let count = 0;
    while (h <= N && m <= 59 && s <= 59) {
        s++;
        if (s === 60) {
            m += 1;
            s = 0;
        }
        if (m === 60) {
            h += 1;
            m = 0;
        }
        if (`${h}${m}${s}`.includes("3")) count += 1;
        if (h === N && m === 59 && s === 59) {
            console.log(count);
            return;
        }
    }
};

solution(5);
