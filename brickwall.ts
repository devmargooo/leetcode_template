export function leastBricks(wall:number[][]) {
     const draws = maxDraws2(wall);
     const rows = wall.length;
     return rows - draws;
}

export function maxDraws2(wall:number[][]):number {
     const map = {};
     wall.forEach((row) => {
          let index = -1;
          for (let i = 0; i < row.length - 1; i++) {
               const current = row[i];
               index += current;
               map[index] = map[index] ? map[index] + 1 : 1;
          }
     })

     const draws:number[] = Object.values(map);
     let max = draws[0] || 0;
     for (let i = 1 ; i < draws.length; i++) {
          if (draws[i] > max) {
               max = draws[i];
          }
     }

     return max;
}

export function maxDraws(wall:number[][]):number {
     const size = getLength(wall[0]);
     const indexes = mapWallToIndexes(wall);
     let max = 0;
     for (let k = 0; k < size - 1; k++) {
          let draws_at_index = 0;

          for (let i = 0; i < indexes.length; i++) {
               const row = indexes[i];
               for (let j = 0; j < row.length; j++) {
                    const value = row[j];
                    if (value === k) {
                         draws_at_index++;
                    }
               }
          }
          if (draws_at_index > max) {
               max = draws_at_index;
          }
     }

     return max;
}

export function getLength(arr:number[]):number {
     return arr.reduce((acc, cur) => acc + cur, 0);
}

export function mapIndexesToRateMap(n: number, indexes:number[][]):Record<number, number> {
     let map = {};
     for (let i = 0; i < n -1; i++) {
          map[i] = 0;
     }
     for (let i = 0; i < indexes.length; i++) {
          const row = indexes[i];
          for (let j = 0; j < row.length; j++) {
               const value = row[j];
               map[value]++;
          }
     }
     return map;
}

export function mapWallToIndexes(wall:number[][]):number[][] {
     return wall.map(mapLine);
}

export function mapLine(line:number[]):number[] {
     let index = -1;
     let result:number[] = [];
     for (let i = 0; i < line.length - 1; i++) {
          const current = line[i];
          index += current;
          result.push(index);
     }
     return result;
}
