function getRes2(mode, ball1, ball2) {
    let nball, fball;
    let A1, A2, A3, A4;
    if (mode === "left") {
        if (ball1.x < ball2.x) {
            nball = ball1;
            fball = ball2;
        } else {
            nball = ball2;
            fball = ball1;
        }
        A1 = nball.x;
        A2 = fball.x;
        A3 = Math.abs(nball.y - fball.y);
        A4 = Math.abs(nball.x - fball.x);
    }
    if (mode === "right") {
        if (ball1.x < ball2.x) {
            nball = ball2;
            fball = ball1;
        } else {
            nball = ball1;
            fball = ball2;
        }
        A1 = 10 - nball.x;
        A2 = 10 - fball.x;
        A3 = Math.abs(nball.y - fball.y);
        A4 = Math.abs(nball.x - fball.x);
    }
    if (mode === "top") {
        if (ball1.y < ball2.y) {
            nball = ball2;
            fball = ball1;
        } else {
            nball = ball1;
            fball = ball2;
        }
        A1 = 10 - nball.y;
        A2 = 10 - fball.y;
        A3 = Math.abs(nball.x - fball.x);
        A4 = Math.abs(nball.y - fball.y);
    }
    if (mode === "bottom") {
        if (ball1.y < ball2.y) {
            nball = ball1;
            fball = ball2;
        } else {
            nball = ball2;
            fball = ball1;
        }
        A1 = nball.y;
        A2 = fball.y;
        A3 = Math.abs(nball.x - fball.x);
        A4 = Math.abs(nball.y - fball.y);
    }

    console.log(nball, fball, A1, A2, A3, A4);
    console.log(Math.pow(A2, 2) + Math.pow((A3 * A4) / A2, 2));
    console.log(Math.pow(A1, 2) + Math.pow(A3 - (A3 * A4) / A2, 2));
    return (
        Math.pow(A2, 2) +
        Math.pow((A3 * A4) / A2, 2) +
        Math.pow(A1, 2) +
        Math.pow(A3 - (A3 * A4) / A2, 2)
    );
}

function solution(m, n, startX, startY, balls) {}

console.log(getRes2("top", { x: 3, y: 7 }, { x: 7, y: 7 }));
