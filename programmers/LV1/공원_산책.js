function solution(park, routes) {
    // 1일단 now를 찾는다
    let y = 0,
        x = 0;
    const width = park[0].length,
        height = park.length;
    x = park
        .filter((line, idx) => {
            if (line.includes("S")) {
                y = idx;
                return true;
            }
            return false;
        })[0]
        .indexOf("S");

    routes.forEach((route) => {
        let [direction, times] = route.split(" ");
        let dx = 0,
            dy = 0,
            tempX = x,
            tempY = y,
            success = true;
        switch (direction) {
            case "E":
                dx = 1;
                break;
            case "W":
                dx = -1;
                break;
            case "S":
                dy = 1;
                break;
            case "N":
                dy = -1;
                break;
        }
        while (times > 0) {
            tempX += dx;
            tempY += dy;
            if (
                tempX >= width ||
                tempX < 0 ||
                tempY >= height ||
                tempY < 0 ||
                park[tempY][tempX] === "X"
            ) {
                success = false;
                break;
            }
            times--;
        }
        if (success) {
            x = tempX;
            y = tempY;
        }
    });

    return [y, x];
}
