function solution(dirs) {
    let answer = 0;
    const pos = [0,0]
    const mirror = {}

    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i]
        const [oldX, oldY] = pos
        let dy = 0
        let dx = 0
                
        if (dir === 'U' && oldY < 5) dy += 1
        if (dir === 'D' && oldY > -5) dy -= 1
        if (dir === 'R' && oldX < 5) dx += 1
        if (dir === 'L' && oldX > -5) dx -= 1
        
        pos[0] = oldX + dx
        pos[1] = oldY + dy
        if (oldX !== pos[0] || oldY !== pos[1]) {
            mirror[`${oldX},${oldY},${pos[0]},${pos[1]}`] = true
            mirror[`${pos[0]},${pos[1]},${oldX},${oldY}`] = true
        }
    }

    return Object.keys(mirror).length/2;
}
