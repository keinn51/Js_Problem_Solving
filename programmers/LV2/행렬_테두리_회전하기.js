const copyMap = (map, rows, columns) => {
    const newMap = new Array(rows).fill(null).map(_ => new Array(columns).fill(null))
    
    for(let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            newMap[y][x] = map[y][x]
        }
    }
    
    return newMap
}

const rotateMap = (map, queries, rows, columns) => {
    const [sy,sx,ey,ex] = queries.map(n => n-1)
    const newMap = copyMap(map, rows, columns)
    const width = ex - sx, height = ey - sy
    let minNum = rows * columns
        
    // top
    if (ex > sx)
        for (let x = sx+1; x <= ex; x++) {
            newMap[sy][x] = map[sy][x-1]
            minNum = Math.min(minNum, map[sy][x-1])
        }
            
    // bottom
    if (ex > sx)
        for (let x = ex-1; x >= sx; x--) {
            newMap[ey][x] = map[ey][x+1]
            minNum = Math.min(minNum, map[ey][x+1])
        }
            
    // right
    if (ey > sy)
        for (let y = sy+1; y <= ey; y++) {
             newMap[y][ex] = map[y-1][ex]
             minNum = Math.min(minNum, map[y-1][ex])
        }
    
    // left
    if (ey > sy)
        for (let y = ey-1; y >= sy; y--) {
            newMap[y][sx] = map[y+1][sx]
             minNum = Math.min(minNum, map[y+1][sx])
        }
            
    return [newMap,minNum]
}

function solution(rows, columns, queries) {
    const answer = [];
    let map = new Array(rows).fill(null)
        .map(_ => new Array(columns).fill(null))
    
    let index = 1
    for(let y = 0; y < rows; y++) {
        for(let x = 0; x < columns; x++) {
            map[y][x] = index
            index += 1
        }
    }
    
    queries.forEach(query => {
        const [_map, _result] = rotateMap(map, query, rows, columns)
        map = _map
        answer.push(_result)
    })
        
    return answer;
}
