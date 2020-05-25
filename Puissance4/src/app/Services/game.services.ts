export class InitGameGrid {
    static readonly type = '[Game] InitCoinsInGrid'
    constructor() { }
}

export class Play {
    static readonly type = '[Game] PlayCoinInGrid'
    constructor(public colIndex: Number) { }
}