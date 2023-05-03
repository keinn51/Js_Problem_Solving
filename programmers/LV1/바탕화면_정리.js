function solution(wallpaper) {
    let e = 0,
        w = wallpaper[0].length,
        s = 0,
        n = wallpaper.length;
    wallpaper.forEach((line, y) => {
        for (let x = 0; x < line.length; x++) {
            if (line[x] === "#") {
                e = Math.max(e, x);
                w = Math.min(w, x);
                s = Math.max(s, y);
                n = Math.min(n, y);
            }
        }
    });
    return [n, w, s + 1, e + 1];
}
