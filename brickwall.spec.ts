import {maxDraws, maxDraws2, mapIndexesToRateMap, mapLine, mapWallToIndexes, leastBricks} from "./brickwall";

describe("mapLine", () => {
    it.each([
        [[1, 1], [0]],
        [[1, 1, 1], [0, 1]],
        [[1, 2, 1], [0, 2]],
        [[3, 2, 3], [2, 4]]
    ])("если на вход подали %j, то результат %j", (data, indexes) => {
        expect(mapLine(data)).toEqual(indexes);
    });
})

it("mapWallToIndexes", () => {
    const data = [
        [1,2,2,1],
        [3,1,2],
        [1,3,2],
        [2,4],
        [3,1,2],
        [1,3,1,1]
    ];

    const expected = [
        [0,2,4],
        [2,3],
        [0,3],
        [1],
        [2, 3],
        [0, 3, 4]
    ];

    expect(mapWallToIndexes(data)).toEqual(expected);
})

it("mapIndexesToRateMap", () => {
    const indexes = [[1, 2], [2]];
    expect(mapIndexesToRateMap(4, indexes)).toEqual({
        0: 0,
        1: 1,
        2: 2,
    })
})

describe("maxDraws", () => {
    it.each([
        [[[2, 1, 1], [3, 1]], 2],
        [[
            [1,2,2,1],
            [3,1,2],
            [1,3,2],
            [2,4],
            [3,1,2],
            [1,3,1,1]
        ], 4],
        [[[1],[1],[1]], 0]
    ])("если на вход подали %j, то результат %j", (data:number[][], rate:number) => {
        expect(maxDraws(data)).toBe(rate);
    });
})

describe("maxDraw2", () => {
    it.each([
        [[[2, 1, 1], [3, 1]], 2],
        [[
            [1,2,2,1],
            [3,1,2],
            [1,3,2],
            [2,4],
            [3,1,2],
            [1,3,1,1]
        ], 4],
        [[[1],[1],[1]], 0],
    ])("если на вход подали %j, то результат %j", (data:number[][], rate:number) => {
        expect(maxDraws2(data)).toBe(rate);
    });
})

describe("leastBricks", () => {
    it("1", () => {
        const data = [
            [1,2,2,1],
            [3,1,2],
            [1,3,2],
            [2,4],
            [3,1,2],
            [1,3,1,1]
        ];
        expect(leastBricks(data)).toBe(2);
    })

    it("2", () => {
        const data = [[1],[1],[1]];
        expect(leastBricks(data)).toBe(3);
    })
})